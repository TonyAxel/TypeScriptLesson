import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
          <Card onClick={() => console.log('sda')} width={'200px'} height={'200px'} variant={CardVariant.outlined}>
              <button>asdsad</button>
          </Card>
        </div>
    );
};

export default App;
