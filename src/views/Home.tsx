import HelloWorld from '../components/HelloWorld.vue'
import { RouterLink } from 'vue-router'
import logo from '../assets/logo.png'
import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <>
        <img src={logo} alt="logo" />
        <HelloWorld msg="vite + tsx"></HelloWorld>
        <RouterLink to={'/about'}><br></br>to about</RouterLink>
      </>
    )
  }
})
