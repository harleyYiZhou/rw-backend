<template>
  <el-container>
    <el-aside v-if="isShow" width="220px">
      <div class="logo">
        <a href="/dashboard">ConnectCity</a>
      </div>
      <div class="adminMsg">
        <img src="../assets/img/current2.png" alt="">
        <div>
          <p>admin</p>
          <p>
            <i class=""></i>
            <span>已上线</span>
          </p>
        </div>
      </div>
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#39435c" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item,index) in routes[1].children" v-if="item.type===firstMenuIndex">
          <router-link :key="index" :to="item.path">
            <el-menu-item :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
        <!-- <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="50">
        <div class="icon">
          <el-button @click="drogAside" type="text">
            <i style="font-size: 20px; color: #fff;" class="el-icon-menu"></i>
          </el-button>
        </div>
        <div class="firstMenu">
          <el-menu :default-active="firstMenuIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#283744" text-color="#fff" active-text-color="#ffd04b">
            <!-- <template >
              <router-link > -->
            <el-menu-item @click="toPath" v-for="(item,index) in routes[1].children" v-if="item.type==='null'" :key="index" :index="item.path">
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <!-- </router-link>
            </template> -->
          </el-menu>
        </div>
        <div class="admin">
          <el-dropdown :hide-on-click="false" trigger="click">
            <span class="el-dropdown-link">
              admin
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div class="title">用户中心</div>
              <el-dropdown-item>用户信息
                <i class="el-icon-warning"></i>
              </el-dropdown-item>
              <el-dropdown-item>修改密码
                <i class="el-icon-question"></i>
              </el-dropdown-item>
              <el-dropdown-item @click="logout">
                <el-popover placement="bottom" width="160" v-model="visible2">
                  <p>你确定要退出系统吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="logout">确定</el-button>
                  </div>
                  <div slot="reference">退出
                    <i class="el-icon-circle-plus"></i>
                  </div>
                </el-popover>
              </el-dropdown-item>
              <!-- <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      routes: this.$router.options.routes,
      firstMenuIndex: "/home",
      visible2: false
    };
  },
  methods: {
    handleSelect: function(key, keyPath) {
      this.firstMenuIndex = key;
      console.log(key, keyPath);
    },
    toPath: function() {
      if (this.firstMenuIndex === "/home") {
        this.$router.push({
          path: "/home"
        });
      }
    },
    drogAside: function() {
      this.isShow = !this.isShow;
    },
    logout: function() {
      this.visible2 = false;
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style lang="scss">
@import "../css/layout.scss";

$aside-bgcolor: #39435c;
$header-bgcolor: #283744;
$font-color: #fff;

.el-container {
  height: 100%;
}
.el-aside {
  .adminMsg {
    @include flex(row);
    padding: 10px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid #444;
      vertical-align: middle;
    }
    div {
      padding: 5px 5px 5px 15px;
      p {
        color: #eee;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
  .el-menu {
    border-right: 1px solid #39435c;
  }
}
.el-header {
  background-color: $header-bgcolor;
  text-align: center;
  line-height: 50px;
  height: 50px;
  padding: 0;
  @include flex(row);
  .icon {
    margin-left: 10px;
    margin-right: 20px;
  }
  .firstMenu {
    flex: 1;
    ul {
      li {
        height: 50px;
        line-height: 50px;
      }
    }
    .el-menu {
      .el-submenu__title {
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .admin {
    margin-right: 10px;
    .el-dropdown {
      cursor: pointer;

      .el-dropdown-menu {
      }
    }
    span {
      color: #fff;
    }
  }
}
.el-aside {
  background: $aside-bgcolor;
  height: 100%;
  .logo {
    background-color: $header-bgcolor;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 220px;
    font-family: "Kaushan Script", cursive;
    font-weight: 500;
    height: 50px;
    display: block;
    a {
      text-decoration: none;
      color: $font-color;
    }
  }
}

.el-popper {
  i {
    float: right;
    margin: 10px auto;
  }
  .title {
    width: 225px;
    text-align: center;
    vertical-align: middle;
    padding: 10px 0;
    background: #f9fafc;
  }
}
</style>
