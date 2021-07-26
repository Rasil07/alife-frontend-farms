import { Nft } from './types'

export const NftFarm = '0xABf2Fb308f3614ECcFa4352Bc874Ef09ABaA7151'
export const NFT = '0xf426F0aFaf912105C119CbD69aedc9e98643d0A1'
export const AMOUNT_TO_CLAIM = '10'

const Nfts: Nft[] = [
  {
    name: 'Pink Spider',
    metadata: 'tier-NFT-base-dark-chocolate.json',
    description: 'Laws are spider webs through which the big flies pass and the little ones get caught. Honore de Balzac',
    previewImage: 'pink-spider-min.png',
    originalImage:
      'https://gateway.pinata.cloud/ipfs/QmZRVNLGYbjh2DaPuqcaQi51wXSjaxzGjAg24WviM5N8Tj',
    fileType: 'png',
    blurImage: '',
    sortOrder: 0,
    nftId: 100,
    tokenAmount: 10,
    tokenSupply: 2222,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    rarity: 'Base',
  },
  {
    name: 'Pink Fox',
    metadata: 'tier-NFT-base-main-nopaint.json',
    description: 'A fox is a wolf who sends flower. - Ruth Brown',
    previewImage: 'pink-fox-min.png',
    originalImage:
      'https://gateway.pinata.cloud/ipfs/QmeDaRUcV3bp5oa6juNYYrV9G7o2zcKFcrRBJmPJxe6BQL',
    fileType: 'png',
    blurImage: '',
    sortOrder: 1,
    nftId: 101,
    tokenAmount: 10,
    tokenSupply: 2222,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    rarity: 'Base',
  },
  {
    name: 'Pink Bunny',
    metadata: 'tier-NFT-base-marble.json',
    description:
      'I\'m nutty bunny number two. I love me and I love you.',
    previewImage: 'pink-bunny-min.png',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmWh9xNZvyhzQWFp4xFEjbBBXPBuZhYnQufL2HwRBae9Gn',
    fileType: 'png',
    blurImage: '',
    sortOrder: 2,
    nftId: 102,
    tokenAmount: 10,
    tokenSupply: 2222,
    nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
    nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
    rarity: 'Base',
  },
  // {
  //   name: 'Pink Dragon',
  //   metadata: '',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget vehicula massa. Donec fringilla a nibh sed euismod. Nam vitae erat vitae nisl pulvinar lacinia. Ut vitae ultrices diam.',
  //   previewImage: 'pink-dragon-min.png',
  //   originalImage:
  //     'https://gateway.pinata.cloud/ipfs/QmUBgkzR5rSLiWH9pgDACayjAQLcCfB8Csn81PVbTdB86t',
  //   fileType: 'png',
  //   blurImage: '',
  //   sortOrder: 3,
  //   nftId: 103,
  //   tokenAmount: 100,
  //   tokenSupply: 666,
  //   nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
  //   nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  //   rarity: 'Base',
  // },
  // {
  //   name: 'Pink B&B',
  //   metadata: '',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget vehicula massa. Donec fringilla a nibh sed euismod. Nam vitae erat vitae nisl pulvinar lacinia. Ut vitae ultrices diam.',
  //   previewImage: 'bull-and-bear-min.png',
  //   originalImage:
  //     'https://gateway.pinata.cloud/ipfs/QmQ8MkJZzAQYNnUmzVXFmBQAZTXSjjvdvGVF3f16HP7LLW',
  //   fileType: 'png',
  //   blurImage: '',
  //   sortOrder: 4,
  //   nftId: 104,
  //   tokenAmount: 100,
  //   tokenSupply: 666,
  //   nftFarmContract: '0x3627Ca89675b42489aD39619A92dd0Ce24CA90bB',
  //   nftContract: '0xa521D5FA64D0aAdB4ee607BAb20142aA173e4392',
  //   rarity: 'Base',
  // },
]

export default Nfts
