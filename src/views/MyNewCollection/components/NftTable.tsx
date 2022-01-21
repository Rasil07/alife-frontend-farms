import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import {
  Card,
  CardBody,
  Heading,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
  ModalWrapper,
  LogoIcon,
} from '@pancakeswap-libs/uikit'

import { Link } from 'react-router-dom'
import { Table } from 'antd'
import useI18n from 'hooks/useI18n'
import { NftFarm, NFT } from 'config/constants/newnfts'
import orderBy from 'lodash/orderBy'
import NftCard from './NftCard'
import NftGrid from './NftGrid'
import { NftProviderContext } from '../contexts/NftProvider'
import TransferNftModal from './TransferNftModal'
import { getNftContract } from '../utils/contracts'

const NftTable = () => {
  const [state, setState] = useState({
    isLoading: false,
    isOpen: true,
    nftTableData: [],
  })

  const { account } = useWallet()
  const [isApprovedStatus, setIsApprovedStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(null)
  const { nftTableData, reInitialize, isApproved } = useContext(NftProviderContext)

  useEffect(() => {
    setIsApprovedStatus(isApproved)
  }, [isApproved])

  const TranslateString = useI18n()

  const onTransfer = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }))
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isDataFetched: true,
        nftTableData,
      }))
    } catch (err) {
      console.log(err)
    }
  }, [nftTableData])


  const handleSuccess = () => {
    onTransfer()
    reInitialize()
  }

  const columns = [
    {
      title: 'NFT Name',
      dataIndex: 'nftName',
      render: (text, record) => {
        return <p style={{ fontWeight: 600, fontSize: '18px' }}>{record.nftName}</p>
      },
    },
    {
      title: 'NFT preview Image',
      dataIndex: 'nftPreviewImage',
      render: (text, record) => {
        return (
          <div>
            <img
              src={`images/nfts/${record.nftPreviewImage}`}
              alt="preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '25px' }}
            />
          </div>
        )
      },
    },
    {
      title: 'Token ID',
      dataIndex: 'tokenId',
      key: 'tokenId',
    },
    {
      title: 'NFT Details',
      dataIndex: 'nftDetailLink',
      render: (text, record) => (
        <Button as={Link} to={record.nftDetailLink}>
          View Detail
        </Button>
      ),
      key: 'nftDetailLink',
    },
    {
      title: 'Transfer NFT',
      dataIndex: '',
      render: (text, record) => {
        const nft = {
          name: record.nftName,
          metadata: '',
          description: '',
          originalImage: '',
          previewImage: '',
          fileType: '',
          blurImage: '',
          sortOrder: 1,
          nftId: parseInt(record.nftId),
          tokenAmount: 0,
          tokenSupply: 0,
          nftFarmContract: '',
          nftContract: '',
          bunnyId: 0,
          tradeId: record.tokenId,
        }
        const tokenIds = [record.tokenId]
        const [onPresentTransferModal] = ModalWrapper(
          <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
        )
        
          return (
            <Button
              fullWidth
              variant="primary"
              mt="24px"
              onClick={() => {
                onPresentTransferModal()
              }}
              disabled={record.onSell}
            >
              {TranslateString(999, 'Transfer')}
            </Button>
          )
      },
      key: '',
    },
  ]

  return <Table columns={columns} dataSource={nftTableData} style={{ marginTop: '25px' }} />
}

export default NftTable
