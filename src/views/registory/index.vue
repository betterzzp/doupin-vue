<template>
    <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-user">
        <el-form-item label="用户名字" prop="username">
            <el-input v-model="user.username"></el-input>
        </el-form-item>
        
        <el-form-item label="密码" prop="password ">
            <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="user.checkPass" autocomplete="off"></el-input>
        </el-form-item>

         <el-form-item label="手机号" prop="phone">
            <el-input v-model="user.phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
            <el-input v-model="user.email"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('user')">提交</el-button>
            <el-button @click="resetForm('user')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { registory } from '@/api/login';
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.user.checkPass !== '') {
            this.$refs.user.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        user: {
          password : '',
          checkPass: '',
          email: '',
          username: '',
          phone: ''
        },
        rules: {
          pass: [
            { validator: validatePass,  required:true,message:'请输入密码',trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, required:true, trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          debugger
          if (valid) {
            registory(this.user).then(response => {
                this.$notify({
                    title: '成功',
                    message: '注册成功,请重新登录',
                    type: 'success'
                });
                this.$router.push({path: '/'})
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>