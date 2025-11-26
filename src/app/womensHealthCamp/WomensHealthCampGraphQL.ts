import { graphQLRequest, GraphQLRequestOptions } from '@/lib/graphqlClient';

export interface CreateWomenHealthCheckUpEventInput {
  fullName: string;
  spouseName: string;
  countryCode: number;
  mobile: number;
  email: string;
  donationAmount: number;
}

interface CreateWomenHealthCheckUpEventResult {
  createWomenHealthCheckUpEvent: boolean;
}

type GraphQLRequestOverrides = Pick<
  GraphQLRequestOptions,
  'headers' | 'authToken' | 'timeoutMs' | 'endpoint'
>;

export const CREATE_WOMEN_HEALTH_CHECKUP_EVENT_MUTATION = /* GraphQL */ `
  mutation CreateWomenHealthCheckUpEvent($input: CreateWomenHealthCheckUpEventInput!) {
    createWomenHealthCheckUpEvent(input: $input)
  }
`;

export const CreateWomenHealthCheckupEventMutation = async (
  input: CreateWomenHealthCheckUpEventInput,
  overrides?: GraphQLRequestOverrides,
) => {
  const data = await graphQLRequest<CreateWomenHealthCheckUpEventResult>({
    query: CREATE_WOMEN_HEALTH_CHECKUP_EVENT_MUTATION,
    variables: { input },
    ...overrides,
  });

  return data.createWomenHealthCheckUpEvent;
};


