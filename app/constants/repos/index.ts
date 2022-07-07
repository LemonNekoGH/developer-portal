import { capitalCase } from "change-case"
import { InternalLandingHeaderProps } from "../../ui/design-system/src/lib/Components/InternalLandingHeader"

// First Level: Individual Repo Presets
import cadence from "./first-route-presets/cadence.json"
import fclJs from "./first-route-presets/fcl-js.json"
import flowCli from "./first-route-presets/flow-cli.json"
import kittyItems from "./first-route-presets/kitty-items.json"
import flowGoSdk from "./first-route-presets/flow-go-sdk.json"
import flowJsTesting from "./first-route-presets/flow-js-testing.json"
import flowNFT from "./first-route-presets/flow-nft.json"
import flowFT from "./first-route-presets/flow-ft.json"
import nftStorefront from "./first-route-presets/nft-storefront.json"
import flowEmulator from "./first-route-presets/flow-emulator.json"

// Second Level: Individual Repo Inner Content Presents
import cadenceLanguage from "./second-route-presets/cadence-language.json"

// First Level: Flow Section Presets
import flow from "./first-route-presets/flow.json"
import learn from "./first-route-presets/learn.json"
import nodes from "./first-route-presets/nodes.json"
import community from "./first-route-presets/community.json"
import tools from "./first-route-presets/tools.json"

// Second Level: Flow Inner Content Presets
import concepts from "./second-route-presets/concepts.json"
import dappDevelopment from "./second-route-presets/dapp-development.json"
import coreContracts from "./second-route-presets/core-contracts.json"
import flowToken from "./second-route-presets/flow-token.json"
import fusd from "./second-route-presets/fusd.json"
import flowPort from "./second-route-presets/flow-port.json"
import nftMarketPlace from "./second-route-presets/nft-marketplace.json"
import staking from "./second-route-presets/staking.json"
import nodeOperation from "./second-route-presets/node-operation.json"
import emulator from "./second-route-presets/emulator.json"
import vscodeExtension from "./second-route-presets/vscode-extension.json"
import faq from "./second-route-presets/faq.json"

import { populateRepoSchema, RepoSchema } from "./repo-schema"
import { ToolName } from "../../ui/design-system/src/lib/Components/Internal/tools"
import {
  ContentName,
  FlowContentName,
  flowContentNames,
  flowSectionNames,
  RepoName,
  repositoryContentNames,
  repositoryMap,
  repositoryNames,
} from "./contents-structure"
import { landingHeaders } from "./custom-headers"

export const DEFAULT_REPO_OWNER = "onflow"
export const DEFAULT_CONTENT_PATH = "docs"

/* Sidebar presets for all repositories and content names */
export const schemas: Partial<Record<ContentName, RepoSchema>> = {
  // First Level: Individual repository ({repository}/...)
  cadence: cadence as RepoSchema,
  "flow-cli": flowCli as RepoSchema,
  "fcl-js": fclJs as RepoSchema,
  "flow-go-sdk": flowGoSdk as RepoSchema,
  "flow-js-testing": flowJsTesting as RepoSchema,
  "flow-nft": flowNFT as RepoSchema,
  "flow-ft": flowFT as RepoSchema,
  "nft-storefront": nftStorefront as RepoSchema,
  "flow-emulator": flowEmulator as RepoSchema,

  // Second Level: Individual repository inner content schema (repository/{inner}/...)
  language: populateRepoSchema(cadenceLanguage as RepoSchema),

  // First Level: Flow Section (flow/{section}/...)
  flow: flow as RepoSchema,
  learn: learn as RepoSchema,
  nodes: nodes as RepoSchema,
  tools: tools as RepoSchema,
  community: community as RepoSchema,

  // Second Level: Flow Inner Contents (flow/section/{inner}/...)
  "kitty-items": kittyItems as RepoSchema,
  "vscode-extension": vscodeExtension as RepoSchema,
  emulator: emulator as RepoSchema,
  concepts: concepts as RepoSchema,
  "dapp-development": dappDevelopment as RepoSchema,
  "core-contracts": coreContracts as RepoSchema,
  "flow-token": flowToken as RepoSchema,
  fusd: fusd as RepoSchema,
  faq: faq as RepoSchema,
  "node-operation": nodeOperation as RepoSchema,
  staking: staking as RepoSchema,
  "flow-port": flowPort as RepoSchema,
  "nft-marketplace": nftMarketPlace as RepoSchema,
}

/* Overriden display names (defaults to dashes converted to spaces then capitalized) */
export const displayNames: Partial<Record<ContentName, string>> = {
  "flow-cli": "Flow CLI",
  "flow-js-testing": "Flow JS Testing",
  "flow-go-sdk": "Flow Go SDK",
  "fcl-js": "Flow Content Library JS",
  "vscode-extension": "VS Code Extension",
  "dapp-development": "DApp Development",
  "nft-marketplace": "NFT Marketplace",
  fusd: "FUSD",
  faq: "FAQ",
}

export const contentTools: Partial<Record<ContentName, ToolName>> = {
  cadence: "cadence",
  "flow-cli": "cli",
  "flow-emulator": "emulator",
  "fcl-js": "fcl",
  "flow-js-testing": "testing",
  "vscode-extension": "vscode",
}

export type ContentSpec = {
  /**
   * The name of the github owner of the repo.
   */
  owner: string

  /**
   * The name of the repo itself that contains the content data.
   */
  repoName: string

  /**
   * The branch to pull data from.
   */
  branch: string

  /**
   * The path within the repo where the  underlying content can be found
   * (typically "/docs", but may differ in some cases)
   */
  basePath: string

  contentName: ContentName

  displayName: string
  schema?: RepoSchema
  landingHeader?: InternalLandingHeaderProps
}

function getBasePath(name: string) {
  if (isFlowInnerContent(name)) {
    return `docs/content/${name}`
  }
  if (isFlowSection(name)) {
    return `docs/content`
  }
  return isRepoInnerContent(name) ? `docs/${name}` : DEFAULT_CONTENT_PATH
}

const getRepoName = (name: string) => {
  if (isFlowInnerContent(name) || isFlowSection(name)) {
    return "flow"
  }
  return isRepo(name) ? name : repositoryMap[name]
}

export const contentSpecMap = [
  ...repositoryNames,
  ...repositoryContentNames,
  ...flowSectionNames,
  ...flowContentNames,
].reduce(
  (accum, name) => ({
    ...accum,
    [name]: {
      owner: DEFAULT_REPO_OWNER,
      repoName: getRepoName(name),
      branch: "master",
      basePath: getBasePath(name),
      contentName: name,
      displayName: displayNames[name] || capitalCase(name),
      schema: schemas[name],
      landingHeader: landingHeaders[name],
    },
  }),
  {} as Record<ContentName, ContentSpec>
)

export function isRepo(name: string): name is RepoName {
  return repositoryNames.includes(name as RepoName)
}
export function isRepoInnerContent(name: string): name is RepoName {
  return repositoryContentNames.includes(name as RepoName)
}

/**
 * examples of flow sections: learn, flow
 */
export function isFlowSection(name: string): name is FlowContentName {
  return flowSectionNames.includes(name as FlowContentName)
}

/**
 * examples of flow inner content: dapp-development, kitty-items
 */
export function isFlowInnerContent(name: string): name is FlowContentName {
  return flowContentNames.includes(name as FlowContentName)
}

export const getContentSpec = (
  firstRoute: string,
  secondRoute?: string | undefined
) => {
  if (isRepo(firstRoute)) {
    if (secondRoute && isRepoInnerContent(secondRoute)) {
      return contentSpecMap[secondRoute]
    }
    return contentSpecMap[firstRoute]
  }

  if (isFlowSection(firstRoute)) {
    if (secondRoute && isFlowInnerContent(secondRoute)) {
      return contentSpecMap[secondRoute]
    }
    return contentSpecMap[firstRoute]
  }
}
