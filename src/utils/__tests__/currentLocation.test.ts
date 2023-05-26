import { mockNavigatorGeolocation } from 'src/setupTests';
import { getCurrentLocation } from '../currentLocation';

describe('Testing getCurrentLocation', () => {
  const setState = jest.fn();
  it('Should put the reponse object into an error state if navigator or geolocation are not available', () => {
    //@ts-ignore
    navigator.geolocation = undefined;
    getCurrentLocation(setState);
    expect(setState).toBeCalledTimes(2);
    expect(setState).toHaveBeenNthCalledWith(1, {
      isLoading: true,
      data: undefined,
      error: undefined,
    });
    expect(setState).toBeCalledWith({
      data: undefined,
      isLoading: false,
      error: new Error('Geolocation is not supported'),
    });
  });

  it('Should put the response object in a success state upon a successfull retrieval of the geolocation', () => {
    const { getCurrentPosition } = mockNavigatorGeolocation;
    getCurrentPosition.mockImplementationOnce((success, rejected) => {
      success({
        coords: {
          accuracy: 0,
          altitude: 1,
          altitudeAccuracy: 1,
          heading: 2,
          latitude: 3,
          longitude: 4,
          speed: 5,
        },
        timestamp: 0,
      });
    });
    //@ts-ignore
    navigator.geolocation = mockNavigatorGeolocation;

    getCurrentLocation(setState);

    expect(setState).toBeCalledTimes(2);
    expect(setState).toHaveBeenNthCalledWith(1, {
      isLoading: true,
      data: undefined,
      error: undefined,
    });
    expect(setState).toBeCalledWith({
      data: {
        coords: {
          accuracy: 0,
          altitude: 1,
          altitudeAccuracy: 1,
          heading: 2,
          latitude: 3,
          longitude: 4,
          speed: 5,
        },
        timestamp: 0,
      },
      isLoading: false,
      error: undefined,
    });
  });

  it('Should put the response object in an error state upon an unsuccessfull retrieval of the geolocation', () => {
    const { getCurrentPosition } = mockNavigatorGeolocation;
    getCurrentPosition.mockImplementationOnce((success, rejected) => {
      rejected({
        code: '',
        message: '',
        PERMISSION_DENIED: '',
        POSITION_UNAVAILABLE: '',
        TIMEOUT: '',
      });
    });
    //@ts-ignore
    navigator.geolocation = mockNavigatorGeolocation;

    getCurrentLocation(setState);

    expect(setState).toBeCalledTimes(2);
    expect(setState).toHaveBeenNthCalledWith(1, {
      isLoading: true,
      data: undefined,
      error: undefined,
    });
    expect(setState).toBeCalledWith({
      data: undefined,
      isLoading: false,
      error: {
        code: '',
        message: '',
        PERMISSION_DENIED: '',
        POSITION_UNAVAILABLE: '',
        TIMEOUT: '',
      },
    });
  });
});
