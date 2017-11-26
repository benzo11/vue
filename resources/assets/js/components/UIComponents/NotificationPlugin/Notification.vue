<template>
  <div data-notify="container" class="col-xs-11 col-sm-4 alert open" role="alert" :class="[verticalAlign, horizontalAlign, alertType]" :style="customPosition" data-notify-position="top-center">
    <button type="button" aria-hidden="true" class="close" data-notify="dismiss" style="position: absolute; right: 10px; top: 5px; z-index: 1033;" @click="close">×
    </button>
    <div class="row float-right">
      <span :class="icon" class="col-xs-1 alert-icon"></span>
      <div :class="hasIcon ? 'col-xs-8' : 'col-xs-12'">
        <slot name="message">
          <div v-html="message"></div>
        </slot>
      </div>
    </div>
  
  </div>
</template>
<script>
  export default {
    name: 'notification',
    props: {
      message: String,
      icon: String,
      verticalAlign: {
        type: String,
        default: 'top'
      },
      horizontalAlign: {
        type: String,
        default: 'center'
      },
      type: {
        type: String,
        default: 'info'
      },
      timeout: {
        type: Number,
        default: 500000
      }
    },
    data () {
      return {}
    },
    computed: {
      hasIcon () {
        return this.icon && this.icon.length > 0
      },
      alertType () {
        return `alert-${this.type}`
      },
      customPosition () {
        let initialMargin = 20
        let alertHeight = 90
        let sameAlertsCount = this.$notifications.state.filter((alert) => {
          return alert.horizontalAlign === this.horizontalAlign && alert.verticalAlign === this.verticalAlign
        }).length
        let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin
        let styles = {}
        if (this.verticalAlign === 'top') {
          styles.top = `${pixels}px`
        } else {
          styles.bottom = `${pixels}px`
        }
        return styles
      }
    },
    methods: {
      close () {
        this.$emit('on-close')
      }
    },
    mounted () {
      if (this.timeout) {
        setTimeout(this.close, this.timeout)
      }
    }
  }

</script>

