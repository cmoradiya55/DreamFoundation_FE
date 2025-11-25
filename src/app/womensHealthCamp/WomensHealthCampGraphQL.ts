import { graphQLRequest, GraphQLRequestOptions } from '@/lib/graphqlClient';

export interface CreateWomensHealthCampRegistrationDto {
  fullName: string;
  spouseName: string;
  mobileCountryCode: number;
  mobile: number;
  email: string;
  donationAmount?: number | null;
}

interface CreateWomensHealthCampRegistrationResult {
  createWomensHealthCampRegistration: {
    id: string;
    registrationNumber?: string | null;
  };
}

type GraphQLRequestOverrides = Pick<
  GraphQLRequestOptions,
  'headers' | 'authToken' | 'timeoutMs' | 'endpoint'
>;

export const CREATE_WOMENS_HEALTH_CAMP_REGISTRATION_MUTATION = /* GraphQL */ `
  mutation CreateWomensHealthCampRegistration($input: CreateWomensHealthCampRegistrationDto!) {
    createWomensHealthCampRegistration(createWomensHealthCampRegistrationDto: $input) {
      id
      registrationNumber
    }
  }
`;

export const CreateWomensHealthCampRegistrationMutation = async (
  input: CreateWomensHealthCampRegistrationDto,
  overrides?: GraphQLRequestOverrides,
) => {
  const data = await graphQLRequest<CreateWomensHealthCampRegistrationResult>({
    query: CREATE_WOMENS_HEALTH_CAMP_REGISTRATION_MUTATION,
    variables: { input },
    ...overrides,
  });

  return data.createWomensHealthCampRegistration;
};


