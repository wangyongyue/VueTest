<<template>
  <div >
    <h1 size="10">{{title}}</h1>
    <p>{{msg}}</p>
    <br>
    <button  @click="pageTwo">点击跳转页面</button>

    <table width="500" border="0">
      <tr>
        <td colspan="2" style="background-color:#FFA500;">
          <h1>主要的&lt网页标题</h1>
        </td>
      </tr>

      <tr>
        <td style="background-color:#FFD700;width:100px;vertical-align:top;">
          <b>菜单</b><br>
          HTML<br>
          CSS<br>
          JavaScript
        </td>
        <td style="background-color:#eeeeee;height:200px;width:400px;vertical-align:top;">
          内容在这里</td>
      </tr>

      <tr>
        <td colspan="2" style="background-color:#FFA500;text-align:center;">
          版权 © runoob.com</td>
      </tr>
    </table>
    <ul>
      <li>Coffee</li>
      <li>Milk</li>
    </ul>
    <ol>
      <li>Coffee</li>
      <li>Milk</li>
    </ol>
    <form>
      First name: <input type="text" name="firstname"><br>
      Last name: <input type="text" name="lastname">
    </form>
    <br>
    <form>
      <input type="radio" name="sex" value="male">Male<br>
      <input type="radio" name="sex" value="female">Female
    </form>
    <form>
      <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
      <input type="checkbox" name="vehicle" value="Car">I have a car
    </form>
    <form>
      Username: <input type="text" name="user">
      <input type="submit" value="Submit">
    </form>

    <dl>
      <dt>项目 1</dt>
      <dd>描述项目 1</dd>
      <dt>项目 2</dt>
      <dd>描述项目 2</dd>
    </dl>




  </div>
</template>
<script>
  export default {
    // name:'login',
    data () {
      return {
        msg:'点击下面的按钮',
        title:'登录'
      }
    },
    methods: {
      pageTwo(){
        this.$router.push('mine')
      },

    }

  }

</script>
