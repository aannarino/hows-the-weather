import { AppBar } from 'src/components/AppBar';
import { useNavigate } from 'react-router';

export const LocationViewPage = () => {
  const navigate = useNavigate();
  const backButtonCB = () => navigate(-1);
  return (
    <AppBar
      title="Replace with location name"
      displayBackButton={true}
      onClickBackButton={backButtonCB}
    />
  );
};
