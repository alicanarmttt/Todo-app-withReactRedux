import "./App.css";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";

function App() {
  return (
    <div>
      <PageContainer>
        <RouterConfig></RouterConfig>
      </PageContainer>
    </div>
  );
}

export default App;
