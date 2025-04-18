import BSlider from './BSlider.vue'

export default {
  title: 'Components/BSlider',
  component: BSlider,
}

const Template = (args) => ({
  components: { BSlider },
  setup() {
    return { args }
  },
  template: `
    <BSlider>
      <div v-for="n in 10" :key="n" style="min-width: 200px; height: 150px; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; scroll-snap-align: start;">
        Slide {{ n }}
      </div>
    </BSlider>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithCards = () => ({
  components: { BSlider },
  template: `
    <BSlider>
      <div v-for="n in 8" :key="n" style="min-width: 220px; height: 180px; background-color: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 16px; scroll-snap-align: start;">
        <h4>Card {{ n }}</h4>
        <p style="color: #666;">This is a card component displayed inside a slider for horizontal scrolling.</p>
      </div>
    </BSlider>
  `,
})
