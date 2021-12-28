import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { ethers } from 'ethers'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Button, Modal, Text } from '@pancakeswap-libs/uikit'
import { useNftGift } from 'hooks/useContract'
import BigNumber from 'bignumber.js'
import { Nft } from 'config/constants/types'
import Tokens from 'config/constants/tokens'
import useI18n from 'hooks/useI18n'
import InfoRow from '../InfoRow'

interface GiftNft extends Nft {
  isClaimed: boolean
  tokenname: string
  amount: number
  tokenminted: number
  tokenId: number
  tokenAddress: string
}
interface ClaimNftModalProps {
  nft: GiftNft
  onSuccess: () => any
  onDismiss?: () => void
  price?: BigNumber
}

const Value = styled(Text)`
  font-weight: 600;
`

const ModalContent = styled.div`
  margin-bottom: 16px;
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`

const ClaimNftModal: React.FC<ClaimNftModalProps> = ({ nft, onSuccess, onDismiss }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [claimTokenDetails, setClaimTokenDetals] = useState({
    percentage: 0,
    decimal: 18,
  })
  const TranslateString = useI18n()
  const { account, chainId } = useWallet()
  const giftContract = useNftGift(chainId)

  const calculateAmount = (amount) => {
    const parseAmount = Number(ethers.utils.parseUnits(amount, claimTokenDetails.decimal).toString())

    const claimableAmount = parseAmount - (claimTokenDetails.percentage * parseAmount) / 100

    return claimableAmount
  }

  const handleConfirm = async () => {
    try {
      const claimableAmount = calculateAmount(nft.amount.toString())

      await giftContract.methods
        .claimToken(Number(nft.tokenId), claimableAmount.toString())
        .send({ from: account })
        .on('sending', () => {
          setIsLoading(true)
        })
        .on('receipt', () => {
          setError('Successfully claimed NFT')
          onDismiss()
          onSuccess()
        })
        .on('error', () => {
          console.error(error)
          setError('Unable to claim NFT')
          setIsLoading(false)
        })
    } catch (err) {
      console.error('Unable to claim NFT:', err)
    }
  }

  useEffect(() => {
    if (!nft)
      return setClaimTokenDetals({
        percentage: 0,
        decimal: 18,
      })

    const { tokenAddress } = nft

    const { reflectionFeePercent, decimal } = Tokens[chainId].find((tkn) => tkn.contractAddress === tokenAddress)

    return setClaimTokenDetals({
      percentage: reflectionFeePercent,
      decimal,
    })
  }, [nft, chainId])

  return (
    <Modal title="Claim this NFT" onDismiss={onDismiss}>
      <ModalContent>
        {error && (
          <Text color="failure" mb="8px">
            {error}
          </Text>
        )}
        <InfoRow>
          <Text>{TranslateString(999, 'You will claim')}:</Text>
          <Value>{`${nft.name} NFT`}</Value>
        </InfoRow>
        <InfoRow>
          <Text>This NFT has:</Text>
          <Value>{`${nft.amount} ${nft.tokenname}`}</Value>
        </InfoRow>
      </ModalContent>
      <Actions>
        <Button fullWidth onClick={handleConfirm} disabled={!account || isLoading}>
          {TranslateString(464, 'Confirm')}
        </Button>
        <Button fullWidth onClick={onDismiss} disabled={!account || isLoading}>
          Cancel
        </Button>
      </Actions>
    </Modal>
  )
}

export default ClaimNftModal
