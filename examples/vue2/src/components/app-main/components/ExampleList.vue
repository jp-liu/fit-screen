<script>
export default {
  name: 'DigitalFlop',
  data() {
    return {
      digitalFlopData: [],
    }
  },
  mounted() {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  },
  methods: {
    createData() {
      const { randomExtend } = this

      this.digitalFlopData = [
        {
          title: 'Vue2.6 or blown',
          doc: 'https://v2.vuejs.org/',
          style: {
            color: '#4d99fc',
            fontWeight: 'bold',
          },
          exampleUrl: 'https://fit-screen-example-vue2.vercel.app/',
          codeUrl: 'https://github.com/jp-liu/fit-screen/blob/main/examples/vue2',
        },
        {
          title: 'Vue2.7',
          doc: 'https://v2.vuejs.org/',
          style: {
            color: '#f46827',
            fontWeight: 'bold',
          },
          exampleUrl: 'https://fit-screen-example-vue2.vercel.app/',
          codeUrl: 'https://github.com/jp-liu/fit-screen/blob/main/examples/vue2',
        },
        {
          title: 'Vue3.0+',
          doc: 'https://vuejs.org/',
          style: {
            color: '#40faee',
            fontWeight: 'bold',
          },
          exampleUrl: 'https://fit-screen-example-vue3.vercel.app/',
          codeUrl: 'https://github.com/jp-liu/fit-screen/blob/main/examples/react',
        },
        {
          title: 'React',
          doc: 'https://reactjs.org/',
          style: {
            color: '#4d99fc',
            fontWeight: 'bold',
          },
          exampleUrl: 'https://fit-screen-example-react.vercel.app/',
          codeUrl: 'https://github.com/jp-liu/fit-screen/blob/main/examples/react',
        },
        {
          title: 'Svelte',
          doc: 'https://svelte.dev/',
          style: {
            color: '#f46827',
            fontWeight: 'bold',
          },
          exampleUrl: '#',
          codeUrl: 'https://github.com/jp-liu/fit-screen/blob/main/examples/svelte',
        },
        {
          title: '暂无',
          style: {
            color: '#40faee',
            fontWeight: 'bold',
          },
          exampleUrl: '#',
          codeUrl: '#',
        },
        {
          title: '暂无',
          style: {
            color: '#4d99fc',
            fontWeight: 'bold',
          },
          exampleUrl: '#',
          codeUrl: '#',
        },
        {
          title: '暂无',
          style: {
            color: '#40faee',
            fontWeight: 'bold',
          },
          exampleUrl: '#',
          codeUrl: '#',
        },
      ]
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1)
        return parseInt(Math.random() * minNum + 1, 10)
      else
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    },
  },
}
</script>

<template>
  <div id="example-list">
    <div v-for="(item, idx) of digitalFlopData" :key="idx" class="example-list-item">
      <div class="example-list-title">
        <a :href="item.doc" :style="item.style">{{ item.title }}</a>
      </div>
      <div class="example-list">
        <dv-decoration-7 style="width:200px;height:30px;">
          &emsp;<a :href="item.exampleUrl" target="_blank">示例</a>&emsp;
          &emsp;<a :href="item.codeUrl" target="_blank">源码</a>&emsp;
        </dv-decoration-7>
      </div>
      <dv-decoration-2 style="width:200px;height:5px;" />
    </div>

    <dv-decoration-10 />
  </div>
</template>

<style lang="less">
#example-list {
  position: relative;
  height: 162px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(6, 30, 93, 0.5);

  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }

  .example-list-item {
    width: 11%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
  }

  .example-list-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .example-list {
    margin-bottom: 5px;

  }

  .exampleUrl {
    .exampleUrl {
      margin-left: 10px;
      display: flex;
      align-items: flex-end;
      box-sizing: border-box;
      padding-bottom: 13px;
    }
  }

  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
  }
}
</style>
