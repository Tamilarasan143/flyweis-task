export interface DataItem {
  _id: string;
  description: string;
  image: string;
}

export interface EverythingItem {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

export interface AutoDealershipEntry {
  _id: string;
  data: DataItem[];
  everyThing: EverythingItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promotedPlacement: any[]; // You can define a specific type if the structure is known
  createdAt: string;
  updatedAt: string;
  __v: number;
  description: string;
  everyThingHeading: string;
  promotedPlacementHeading: string;
  title: string;
}

export interface PostAutoDealership{
    title: string;
      description: string;
  everyThingHeading: string;
  promotedPlacementHeading: string;
}
export interface AutoDealershipResponse {
  message: string;
  status: number;
  data: AutoDealershipEntry[];
}
