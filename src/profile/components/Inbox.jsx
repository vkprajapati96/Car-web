import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';


function Inbox() {
    return (
        <div style={{ width: '1000px', height: '500px' }}>
            <SendbirdApp
                // You can find your Sendbird application ID on the Sendbird dashboard. 
                appId={import.meta.env.VITE_SENDBIRT_APP_ID}
                // Specify the user ID you've created on the dashboard.
                // Or you can create a user by specifying a unique userId.  
                userId={'bilalfaiz'}
            />
        </div>
    )
}

export default Inbox