<template>
  <div class="alpha">
    <div class="body">
      <h2>User ID</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search User List..."/>
        </div>
        <div class="row filter_group">
          <!--          <div class="blue">Download transactions</div>-->
          <div class="action-content">
            <img src="@/assets/Filterslines.svg"  alt="Export"/>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
<!--      <div class="empty-state" v-if="this.contacts.length === 0">-->
<!--        <img src="@/assets/empty.svg" alt="empty">-->
<!--        <p class="empty-state-text-1">You have nothing to see</p>-->
<!--        <p class="empty-state-text-2">This is where your list of users will appear</p>-->
<!--        &lt;!&ndash;        <p class="empty-state-text-3">&ndash;&gt;-->
<!--        &lt;!&ndash;          <i class='bx bx-plus' ></i>&ndash;&gt;-->
<!--        &lt;!&ndash;          Transaction&ndash;&gt;-->
<!--        &lt;!&ndash;        </p>&ndash;&gt;-->
<!--      </div>-->

      <div class="table" >

        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>ID Front</th>
            <th>ID Back</th>
          </tr>

          <tbody v-for="child in paginatedItems" :key="child.key">
          <tr>
            <td data-label="First Name">{{child.firstName}}</td>
            <td data-label="Last Name">{{child.lastName}}</td>
            <td data-label="Email">{{child.email | formatTextWithEllipsis}}</td>
            <td data-label="ID Front">
              <!-- Uncomment and replace with actual Vue.js bindings -->
<!--               <img style="width: 15%" :src="child.frontId" alt="Selected Image" />-->
              <a :href="child.frontId" target="_blank">{{child.frontId}}</a>
            </td>
            <td data-label="ID Back">
              <!-- Uncomment and replace with actual Vue.js bindings -->
<!--               <img style="width: 15%" :src="child.backId" alt="Selected Image" />-->
              <a href="#" @click.prevent="openImageInNewTab(child.backId)">
                {{ child.backId }}
              </a>

            </td>
          </tr>
          </tbody>

        </table>


        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
          <div class="page-indicator">
            Page {{ currentPage }} of {{ totalPages }}
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
        </div>

<!--        <form>-->
<!--          <div class="fields-alpha-2">-->
<!--            <label class="fields-alpha-2-label">Select Email</label>-->
<!--            <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>-->
<!--              <option v-for="option in contacts" :key="option" :value="option.email" >-->
<!--                {{ option.email }}-->
<!--              </option>-->
<!--            </select>-->
<!--            <button class="btn" @click="update">Delete User</button>-->
<!--          </div>-->
<!--        </form>-->

      </div>

    </div>
  </div>
</template>

<script>


import StoreUtils from "@/utility/StoreUtils";
import {mapState} from "vuex";

export default {
  name: "DashBoardUploadedID",
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
      currentPage: 1,
      itemsPerPage: 6,
    }
  },
  computed:{
    allUsers() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
    },
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
      readAllUsers: state => state.auth.readAllUsers,
    }),
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.allUsers.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.allUsers.length / this.itemsPerPage);
    },
  },
  methods: {
    openImageInNewTab(url) {
      const win = window.open();
      win.document.write(`<img src="${url}" alt="Image"/>`);
      // Consider adding document.close() to signal that you've finished writing to the document
      win.document.close();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },


  },
  created() {
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadAllUsers)
  },

  mounted() {

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }

    StoreUtils.dispatch(StoreUtils.actions.auth.allUsers)
  }
}
</script>

<style scoped>
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #071333;
}
.row{
  display: flex;

}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}

.white{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #FFFFFF;
border: 0.5px solid #3C4A57FF;
  font-size: 13px;
  padding:  6px 14px;
  border-radius: 5px;
  gap: 10px;
}
.blue{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #1570EF;
  border: 1px solid #1570EF;
  color: #ffffff;
}

.fg--search {
  background: none;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #ffffff;
border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
}

.fg--search input::placeholder {
  color: #071333;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}

.fa-search{
  color: #071333;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {

  background-color: #0f171c;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #071333;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}

.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #071333;
  font-size: 13px;
}

.fields-alpha-2{
  background-color: #0f171c;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 5px;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.fields-alpha-2-label{
  color: #ffffff;
}

.btn{
  /*margin-top: 3%;*/
  color: #ffffff;
  background-color: #0f171c;
  border: 1px solid #F2F4F7;
  padding: 10px 10px;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  text-align: center;
  width: 18%;
  border-radius: 5px;
  transition: all 0.3s ease-in;
}

.btn:hover{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #0f171c;
}

select {
  width: 45%;
  padding: 4px;
  /*padding-left: 15px;*/
  display: block;
  background: #FFFFFF;
border: 0.5px solid #3C4A57FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
}

.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #071333;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #071333;
  font-weight: 200;
  font-size: 13px;
}

@media (max-width: 700px) {
  .table{
    margin-left: unset;
  }
  th {
    display: none;
  }

  table, thead, tbody, td, tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 0.5px solid #ccc;
  }

  td {
    /* Each cell is now a full-width row */
    border: none;
    position: relative;
    padding-left: 60%;
    text-align: center;
    margin-bottom: 10px;
    font-size: 15px;
  }

  td:before {
    /* Use the data-label for the pseudo-element content */
    content: attr(data-label);
    position: absolute;
    left: 10px;
    padding-left: 5%;
    font-weight: bold;
  }
}

@media (max-width: 500px) {
  .filter_group{
    display: none;
  }

  .fg--search {
    margin-left: unset;
  }

  .body{
    padding: 10px 20px 10px 5px;
  }
  h2{
    padding-left: 10px;
  }
  .empty-state-container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>