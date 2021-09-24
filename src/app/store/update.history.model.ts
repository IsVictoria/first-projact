export interface IUpdateHistoryModel {
  edges: IUpdateHistoryPageEdge[];
  pageInfo: any;
  filters?: IUpdateHistoryFilterArgs;
  loading?: boolean;
}

export interface IUpdateHistoryPageEdge {
  node: {
    errors: Error[]
    metadata: UpdateHistorySelfMetadata
    source: UpdateHistorySource
  };
}

export class UpdateHistorySelfMetadata {
  name: string;
  kind: string;
  uid: number;
}

export class UpdateHistorySource {
  path: string;
  revision: string;
  commitMessage?: string;
  commitDate: number;
  commitAuthor: string;
}

export class IUpdateHistoryFilterArgs {
  giRepo?: string;
  sync?: string;
  kinds?: string;
}

export interface IFetchUpdateHistoryPageDto {
  history: {
    edges: IUpdateHistoryPageEdge[]
    pageInfo: any
  };
}
