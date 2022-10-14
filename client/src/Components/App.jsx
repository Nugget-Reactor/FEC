import React, {useState, useEffect} from 'react';
import OverviewApp from '../Components/Overview/OverviewApp.jsx';
import axios from 'axios';
import QnA from './QnA/QnA.jsx';
<<<<<<< HEAD

=======
import Ratings from './R&R/Ratings.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
>>>>>>> main

const App = () => {


  return (
    <div>
      <OverviewApp />
      <RelatedItems />
      <QnA />
<<<<<<< HEAD
    </div>
    //   <Ratings />
    // </>
=======
      <Ratings />
    </div>
>>>>>>> main
  )
}

export default App;