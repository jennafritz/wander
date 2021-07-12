import Alert from 'react-bootstrap/Alert'

function AlertComponent({message, show}) {

    if(show){
        return (
       <Alert variant={'info'}>
           Test alert! {message}
       </Alert>
      );
    }
}
  
export default AlertComponent