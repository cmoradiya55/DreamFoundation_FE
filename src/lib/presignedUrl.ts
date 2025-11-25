import { graphQLRequest, GraphQLRequestOptions } from '@/lib/graphqlClient';
import axios, { AxiosProgressEvent } from 'axios';

export interface PresignedUrlInput {
  fileName: string;
  module: string;
  contentType: string;
}

export interface PresignedUrlPayload {
  upload_url: string;
  file_url: string;
}

type GraphQLRequestOverrides = Pick<
  GraphQLRequestOptions,
  'headers' | 'authToken' | 'timeoutMs' | 'endpoint'
>;

const PRESIGNED_URL_QUERY = /* GraphQL */ `
  query PresignedUrl($uploadFile: UploadFileDto!) {
    presignedUrl(uploadFile: $uploadFile) {
      upload_url
      file_url
    }
  }
`;

export const getPresignedUrl = async (
  uploadFile: PresignedUrlInput,
  overrides?: GraphQLRequestOverrides,
): Promise<PresignedUrlPayload> => {
  const data = await graphQLRequest<{ presignedUrl: PresignedUrlPayload }>({
    query: PRESIGNED_URL_QUERY,
    variables: { uploadFile },
    ...overrides,
  });

  return data.presignedUrl;
};

export const upoadFile = async (file: File, module: string, onProgress?: (percent: number) => void) => {
  const preSignedUrl = await getPresignedUrl({
    fileName: file.name,
    module: module,
    contentType: file.type,
  });
  console.log(preSignedUrl);
  const config = {
    headers: {
      'Content-Type': file.type || 'application/octet-stream',
    },
    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
      if (progressEvent.total && onProgress) {
        const percent = (progressEvent.loaded / progressEvent.total) * 100;
        onProgress(percent);
      }
    },
  }

  const res = await axios.put(preSignedUrl.upload_url, file, config);
  console.log("upload file response", res);
  return preSignedUrl.file_url;
}

