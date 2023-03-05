import { Container, Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import './Footer.scss'

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
              You’ll always hear it from In Design first. Our passion is
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
          <Grid item xs={12} md={6} className="footer-social">
            <div className="menu">
              <div className="title">About In Design</div>
              <ul className="links">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Mission</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a href="#" className="facebook"></a>
                </li>
                <li>
                  <a href="#" className="instagram"></a>
                </li>
                <li>
                  <a href="#" className="you-tube"></a>
                </li>
                <li>
                  <a href="#" className="pinterest"></a>
                </li>
                <li>
                  <a href="#" className="twitter"></a>
                </li>
              </ul>
            </div>
            <div className="disclaimer">
              <div className="copyright">
                Photo copyright retained by photo owners, everything else © 2023
                In Design®.
              </div>
              <div className="links">
                <a href="#">Investor Relations</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
export default Footer
