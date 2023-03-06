import { ToolsPageProps } from "../../ui/design-system/src/lib/Pages/ToolsPage"
import { externalLinks } from "../external-links"
import { metadata } from "../metadata"

import {
  accountApiTool,
  bigDipperTool,
  bloctoWallet,
  cadutTool,
  cdcWebpackPlugin,
  cliTool,
  commandLineLinter,
  dapperWallet,
  dartSDK,
  dotNetSDK,
  elixirSDK,
  emulatorTool,
  eventIndexingTool,
  faucetTool,
  fclSDK,
  fionaWallet,
  flowMarketplaceMonitorTool,
  flowScanTool,
  flowserTool,
  flowViewSourceTool,
  goSDK,
  graffleTool,
  httpSDK,
  intellijTool,
  jsTestingLibTool,
  jvmSDK,
  ledgerWallet,
  nufiWallet,
  lilicoWallet,
  overflowTool,
  phpSDK,
  pythonSDK,
  rubySDK,
  rustSDK,
  swiftSDK,
  vsCodeTool,
  walletApiTool,
  niftoryTool,
  flowviewTool,
  dapperSelfCustodyWallet,
  unitySDK,
} from "../tools"

export const data: ToolsPageProps = {
  githubUrl: externalLinks.github,
  discordUrl: externalLinks.discord,
  tools: [
    cliTool,
    niftoryTool,
    emulatorTool,
    jsTestingLibTool,
    flowviewTool,
    flowserTool,
    overflowTool,
    cadutTool,
    faucetTool,
    intellijTool,
    vsCodeTool,
    commandLineLinter,
    cdcWebpackPlugin,
    graffleTool,
  ],
  wallets: [
    bloctoWallet,
    dapperWallet,
    ledgerWallet,
    nufiWallet,
    lilicoWallet,
    fionaWallet,
    dapperSelfCustodyWallet,
  ],
  sdks: [
    httpSDK,
    fclSDK,
    goSDK,
    unitySDK,
    pythonSDK,
    jvmSDK,
    rubySDK,
    dartSDK,
    dotNetSDK,
    phpSDK,
    swiftSDK,
    rustSDK,
    elixirSDK,
  ],
  apisAndServices: [
    walletApiTool,
    eventIndexingTool,
    accountApiTool,
    flowMarketplaceMonitorTool,
    graffleTool,
  ],
  explorers: [flowScanTool, flowViewSourceTool, bigDipperTool],
  contentNavigationListItems: {
    contentNavigationItems: [
      {
        title: "Learn",
        text: "All the resources you need to learn and build.",
        link: "/learn",
        icon: "learn",
      },
      {
        title: "Community",
        text: "Learn more about Flow's ecosystem and get involved.",
        link: "/community",
        icon: "community",
      },
    ],
    header: "Explore More Content",
  },
  secondaryNavSections: [
    { title: "Development Tools", elementId: "development-tools" },
    { title: "Wallets", elementId: "wallets" },
    { title: "SDKs", elementId: "sdks" },
    { title: "APIs and Services", elementId: "apis-and-services" },
    {
      title: "Flow Blockchain Explorers",
      elementId: "flow-blockchain-explorers",
    },
  ],
}

export const editPageUrl = `${metadata.githubRepoBaseUrl}/blob/main/app/data/pages/tools.ts`
