export interface GeolocationResponse {
  isLoading: boolean;
  data: GeolocationPosition | undefined;
  error: any;
}
export const getCurrentLocation = async (
  setState: (state: GeolocationResponse) => void
) => {
  const response: GeolocationResponse = {
    isLoading: true,
    data: undefined,
    error: undefined,
  };

  setState(response);

  const onSuccess = (position: GeolocationPosition) => {
    setState({ ...response, isLoading: false, data: position });
  };

  const onError = (error: GeolocationPositionError) => {
    setState({ ...response, isLoading: false, error: error });
  };

  if (!navigator.geolocation) {
    setState({
      ...response,
      isLoading: false,
      error: new Error('Geolocation is not supported'),
    });
  } else {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      maximumAge: Infinity,
    });
  }
};
