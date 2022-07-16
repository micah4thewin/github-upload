import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WebsiteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Website {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: boolean;
  readonly projectData: string;
  readonly test: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Website, WebsiteMetaData>);
  static copyOf(source: Website, mutator: (draft: MutableModel<Website, WebsiteMetaData>) => MutableModel<Website, WebsiteMetaData> | void): Website;
}

export declare class Profile {
  readonly id: string;
  readonly Name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}