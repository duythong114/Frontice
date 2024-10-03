import Button from '../../components/common/Button/Button';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <Button
        type="secondary"
        size="large"
        label="button-large"
        iconPosition="left"
      />
      <Button
        type="primary"
        size="normal"
        label="button-normal"
        iconPosition="right"
      />
      <Button
        type="tertiary"
        size="medium"
        label="button-medium"
        iconPosition="left"
      />
      <Button size="small" label="button-small" iconPosition="left" />
      <Button
        type="primary"
        size="extra-small"
        label="button-extra-small"
        iconPosition="left"
      />
    </div>
  );
};

export default Home;
