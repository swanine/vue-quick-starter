import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <h1>About</h1>
          <RouterLink to={'/'}>back</RouterLink>
        </>
      )
    }
  }
})
