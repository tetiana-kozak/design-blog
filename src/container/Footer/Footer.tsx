import { Container, Grid } from '@mui/material'
import './Footer.scss'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
// import { img } from './assets/plus-icon.svg'

type Props = {}
const Footer = (props: Props) => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '& .MuiFilledInput-root:after': {
      border: 'none',
    },
  })
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} md={6} className="footer-newsletter">
            <div className="icon">
              <span></span>
            </div>
            <div className="subtitle">Modernize Your Life</div>
            <h6 className="title">Get in the Know</h6>
            <p className="description">
              You’ll always hear it from Design Milk first. Our passion is
              discovering and highlighting emerging talent, and we’re energized
              by and for our community of like-minded design lovers — like you!
            </p>
            <form action="#" method="get" className="footer-form">
              <CssTextField
                id="outlined-multiline-flexible"
                label="Enter your email"
                fullWidth
                variant="filled"
                className="input"
              />
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            hello 2
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default Footer
