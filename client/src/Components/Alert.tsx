import { useAppContext } from '../context/appContext'

const Alert: React.FC = () => {
  const { alertShow, alertType, alertMessage } = useAppContext()
  return (
    <>
      {alertShow && (
        <div className={`alert alert-${alertType}`}>{alertMessage}</div>
      )}
    </>
  )
}
export default Alert
