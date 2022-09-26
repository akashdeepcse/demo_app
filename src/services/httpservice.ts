import {API_URLS} from '../constants';
import {PostDataProps} from '../types';

export const httpService = async ({
  path,
  request,
}: {
  path: string;
  request: RequestInit;
}): Promise<PostDataProps[] | null> => {
  try {
    const response = await fetch(`${API_URLS.BASE_URL}${path}`, request);
    const JsonData = await response.json();
    return JsonData;
  } catch (error) {
    console.log('API Error ===> ', error);
    return null;
  }
};
