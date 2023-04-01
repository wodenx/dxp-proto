export type ContentCommitProps = {
  base: string;
  script: string;
  message: string;
  path: string;
  gitUrl: string;
  gitUsername: string;
  gitPassword: string;
};

type OptionEnabled = {
  enabled: true;
  [key: string]: string | boolean | undefined;
};

export type UserData = {
  login: string;
  id: number;
  [key: string]: string | number | boolean | undefined;
};

export type TeamData = {
  slug: string;
  [key: string]: string | number | boolean | undefined;
};

export type AppData = {
  slug: string;
  [key: string]: string | number | boolean | undefined;
};

export type RestrictionData = {
  users: UserData[];
  teams: TeamData[];
  apps?: AppData[];
  [key: string]: UserData[] | TeamData[] | AppData[] | string | string[] | undefined;
};

export type Restriction = {
  users: string[];
  teams: string[];
  apps?: string[];
};

export type Checks = {
  context: string;
  app_id: number;
};

export type GitHubBranchProtectionData = {
  required_status_checks: {
    strict: boolean;
    contexts: string[];
    checks?: Checks[];
    [key: string]: string | boolean | string[] | Checks[] | undefined;
  };
  required_pull_request_reviews: {
    dismissal_restrictions?: RestrictionData;
    dismiss_stale_reviews?: boolean;
    require_code_owner_reviews?: boolean;
    require_last_push_approval?: boolean;
    required_approving_review_count?: number;
    bypass_pull_request_allowances?: RestrictionData;
  };
  restrictions: RestrictionData;
  enforce_admins: OptionEnabled;
  required_signatures?: OptionEnabled;
  required_linear_history?: OptionEnabled;
  allow_force_pushes?: OptionEnabled;
  allow_deletions?: OptionEnabled;
  block_creations?: OptionEnabled;
  required_conversation_resolution?: OptionEnabled;
  lock_branch?: OptionEnabled;
  allow_fork_syncing?: OptionEnabled;
};

export type RequiredPullRequestReviews = {
  dismissal_restrictions?: Restriction;
  dismiss_stale_reviews?: boolean;
  require_code_owner_reviews?: boolean;
  require_last_push_approval?: boolean;
  required_approving_review_count?: number;
  bypass_pull_request_allowances?: Restriction | null;
};

export type GitHubBranchProtectionPayLoad = {
  required_status_checks: {
    strict: boolean;
    contexts: string[];
    checks?: Checks[];
  } | null;
  required_pull_request_reviews: RequiredPullRequestReviews | null;
  restrictions: Restriction | null;
  // boolean types:
  enforce_admins: boolean;
  required_signatures?: boolean;
  required_linear_history?: boolean;
  allow_force_pushes?: boolean;
  allow_deletions?: boolean;
  block_creations?: boolean;
  required_conversation_resolution?: boolean;
  lock_branch?: boolean;
  allow_fork_syncing?: boolean;
};

export interface GitApiInterface {
  // pull request
  createPullRequest: (base: string, source: string) => Promise<number>;
  mergePullRequest: (pullNumber: number) => Promise<void>;
  // branch
  deleteBranch: (branchName: string) => Promise<void>;
  // branch protection
  getBranchProtection: (branchName: string) => Promise<GitHubBranchProtectionData | false>;
  setBranchProtection: (
    branchName: string,
    protection: GitHubBranchProtectionPayLoad,
  ) => Promise<GitHubBranchProtectionData>;
  removeBranchProtection: (branchName: string) => Promise<void>;
  getBranchProtectionPayload: (data: GitHubBranchProtectionData) => GitHubBranchProtectionPayLoad;
}

export type GitApiProps = {
  owner: string;
  repo: string;
  token: string;
  baseURL: string;
};

export type GitApiOptions = {
  baseURL: string,
  headers: {
    Authorization: string;
    'Content-Type': string;
    Accept: string;
  }
};
