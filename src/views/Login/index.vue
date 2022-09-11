<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="登录" class="nav-bar"></van-nav-bar>

    <!-- 表单 -->
    <van-form @submit="onSubmit" class="form" ref="form">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="mobileRules"
        type="number"
        maxlength="11"
      >
        <template #label>
          <span class="toutiao toutiao-shouji"></span>
        </template>
      </van-field>

      <van-field
        v-model="code"
        name="code"
        placeholder="请输入验证码"
        :rules="codeRules"
        type="number"
        maxlength="6"
      >
        <template #label>
          <span class="toutiao toutiao-yanzhengma"></span>
        </template>
        <!-- 验证码 -->
        <template #button>
          <van-button
            class="btn"
            round
            type="default"
            size="small"
            native-type="button"
            v-if="isShowCodeBtn"
            @click="sendCode"
            >获取验证码</van-button
          >
          <van-count-down
            v-else
            :time="6 * 1000"
            format="ss秒"
            @finish="isShowCodeBtn = true"
          />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mobileRules, codeRules } from './rule'
import { login, sendCodeAPI } from '@/API'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      mobile: '',
      code: '',
      mobileRules,
      codeRules,
      isShowCodeBtn: true
    }
  },
  methods: {
    ...mapMutations(['SETTOKEN']),
    // submit事件只有表单校验通过以后会被触发
    async onSubmit() {
      // submit 事件只有表单校验通过以后会被触发

      try {
        // 登录
        const { data } = await login(this.mobile, this.code)
        console.log(data)
        this.SETTOKEN(data.data)
        // 跳转路由
        this.$router.push('/my')
        // 成功的提示
        this.$toast.success('登录成功')
      } catch (error) {
        // error：1. js抛的错 2. axios封装的error对象
        // axios封装的error对象
        // error.response.data 后端返回的数据
        // error.response.status 后端返回的状态码
        if (error.response && error.response.status === 400) {
          this.$toast.fail(error.response.data.message)
        } else {
          console.dir(error)
          this.$toast.clear()
        }
        this.$toast.fail('登录失败')
      }
    },
    loading() {
      this.$toast.loading({
        message: '加载中...', // 提示文案
        forbidClick: true, // 禁止点击
        duration: 0 // 展示的时长，如果值为0时，一直展示
      })
    },
    async sendCode() {
      // 验证用户是否输入了有效的手机号
      // form绑定ref
      // $refs.form.validate()
      await this.$refs.form.validate('mobile')
      this.loading()
      // 1. 发送请求
      try {
        await sendCodeAPI(this.mobile)
        this.isShowCodeBtn = false
        this.$toast.success('发送验证码成功')
      } catch (error) {
        this.$toast.fail('发送验证码失败')
        if (
          error.response &&
          (error.response.status === 429 || error.response.status === 404)
        ) {
          // axios的错误
          this.$toast.fail(error.response.data.message)
        } else {
          this.$toast.clear()
          throw error
        }
      }
      // console.log('发送请求')
      // 2. 显示倒计时组件
      this.isShowCodeBtn = false
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  background-color: #3296fa;
  color: #fff;
}
:deep(.van-nav-bar__title) {
  color: #fff;
}
:deep(.form) {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex: 19;
  }
  .toutiao {
    font-size: 40px;
  }
}
.btn {
  height: 0.64rem;
  background-color: #eee;
  color: #a58594;
}
</style>
