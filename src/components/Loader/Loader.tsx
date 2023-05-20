import { LinearProgress } from '@mui/material'

type Props = {}
const Loader = (props: Props) => {
  return (
    <>
      <LinearProgress color="inherit" />
      <div style={{ marginTop: '15px' }}>Loading...</div>
    </>
  )
}
export default Loader
