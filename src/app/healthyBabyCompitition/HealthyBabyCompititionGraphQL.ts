import { graphQLRequest, GraphQLRequestOptions } from '@/lib/graphqlClient';

export interface HealthyBabyCompetitionInput {
  fullName: string;
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: string;
  heightInCm: number;
  weightInKg: number;
  fatherName: string;
  fatherMobileCountryCode: number;
  fatherMobile: number;
  motherName: string;
  motherMobileCountryCode: number;
  motherMobile: number;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyMobileCountryCode: number;
  emergencyMobile: number;
  consentFormAccepted: boolean;
}

interface HealthyBabyCompetitionResult {
  healthyBabyCompetitionRegistration: boolean;
}

type GraphQLRequestOverrides = Pick<
  GraphQLRequestOptions,
  'headers' | 'authToken' | 'timeoutMs' | 'endpoint'
>;

export const CREATE_HEALTHY_BABY_COMPETITION_MUTATION = /* GraphQL */ `
  mutation CreateHealthyBabyCompetition($healthyBabyCompetitionInput: CreateHealthyBabyCompetitionDto!) {
    healthyBabyCompetitionRegistration(healthyBabyCompetitionInput: $healthyBabyCompetitionInput)
  }
`;

export const CreateHealthyBabyCompetitionMutation = async (
  input: HealthyBabyCompetitionInput,
  overrides?: GraphQLRequestOverrides,
) => {
  const data = await graphQLRequest<HealthyBabyCompetitionResult>({
    query: CREATE_HEALTHY_BABY_COMPETITION_MUTATION,
    variables: { healthyBabyCompetitionInput: input },
    ...overrides,
  });

  return data.healthyBabyCompetitionRegistration;
};

