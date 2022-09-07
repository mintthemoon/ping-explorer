import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  chainMenus.push({ header: 'blockchains' })
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    chainMenus.push(menu)
  })
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnets',
      href: 'https://cosmos.mintthemoon.xyz',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnets',
      href: 'http://testnets-cosmos.mintthemoon.xyz',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/mintthemoon',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/mintthemoon',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Website',
    href: 'https://mintthemoon.xyz',
    icon: 'ChromeIcon',
  })

  return chainMenus
}

export default processMenu()
