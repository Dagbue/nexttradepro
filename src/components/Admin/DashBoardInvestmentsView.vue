<!--<template>-->
<!--  <div class="alpha">-->
<!--    <div class="body">-->
<!--      <h2>Investments</h2>-->
<!--      <div class="row trans-mgt">-->
<!--        <div class="form-group fg&#45;&#45;search">-->
<!--          <button type="submit"><i class="fa fa-search"></i></button>-->
<!--          <input type="text" class="input" placeholder="Search Investments..."/>-->
<!--        </div>-->
<!--        <div class="row filter_group">-->
<!--          &lt;!&ndash;          <div class="blue">Download transactions</div>&ndash;&gt;-->
<!--          <div class="action-content">-->
<!--            <img src="@/assets/Filterslines.svg"  alt="Export"/>-->
<!--            <p>Filter</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="section-5">-->
<!--      <div class="empty-state" v-if="this.contacts.length === 0">-->
<!--        <img src="@/assets/empty.svg" alt="empty">-->
<!--        <p class="empty-state-text-1">You have nothing to see</p>-->
<!--        <p class="empty-state-text-2">This is where your Investments will appear</p>-->
<!--        &lt;!&ndash;        <p class="empty-state-text-3">&ndash;&gt;-->
<!--        &lt;!&ndash;          <i class='bx bx-plus' ></i>&ndash;&gt;-->
<!--        &lt;!&ndash;          Transaction&ndash;&gt;-->
<!--        &lt;!&ndash;        </p>&ndash;&gt;-->
<!--      </div>-->

<!--       <div class="table" v-if="this.contacts.length >0">-->
<!--         <table>-->
<!--          <tr>-->
<!--            <th>Email</th>-->
<!--&lt;!&ndash;            <th>Trade Plans</th>&ndash;&gt;-->
<!--            <th>Account Balance</th>-->
<!--            <th>Btc Balance</th>-->
<!--            <th>Profits</th>-->
<!--&lt;!&ndash;            <th>Bonus</th>&ndash;&gt;-->
<!--&lt;!&ndash;            <th>Ref Bonus</th>&ndash;&gt;-->
<!--            <th>Withdrawal</th>-->
<!--          </tr>-->

<!--          <tbody v-for="child in paginatedItems" :key="child.key">-->
<!--          <tr>-->
<!--            <td>{{child.email}}</td>-->
<!--&lt;!&ndash;            <td>{{child.selected}}</td>&ndash;&gt;-->
<!--            <td>$ 0</td>-->
<!--            <td>$ {{ child.btcBalance }}</td>-->
<!--            <td>$ {{child.profits}}</td>-->
<!--&lt;!&ndash;            <td>$ {{child.bonusMain}}</td>&ndash;&gt;-->
<!--&lt;!&ndash;            <td>$ {{child.bonus}}</td>&ndash;&gt;-->
<!--            <td>$ {{child.withdrawal}}</td>-->
<!--          </tr>-->
<!--          </tbody>-->

<!--          </table>-->
<!--         <div class="pagination">-->
<!--           <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>-->
<!--           <div class="page-indicator">-->
<!--             Page {{ currentPage }} of {{ totalPages }}-->
<!--           </div>-->
<!--           <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>-->
<!--         </div>-->
<!--         <form>-->
<!--           <div class="fields-alpha-2">-->
<!--&lt;!&ndash;                   <label>Select Email</label>&ndash;&gt;-->
<!--               <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Users Email" required>-->
<!--                 <option value="" disabled>Select Users Email</option>-->
<!--                 <option v-for="option in contacts" :key="option" :value="option.email" >-->
<!--                   {{ option.email}}-->
<!--                 </option>-->
<!--               </select>&nbsp;-->
<!--             &nbsp;&nbsp;&nbsp;-->

<!--&lt;!&ndash;                   <label>Enter Profit</label>&ndash;&gt;-->
<!--             <input type="number" v-model="balance" placeholder="Enter Balance"/>-->
<!--             <button class="btn" @click="update1" type="button">Submit</button>&nbsp;-->
<!--             &nbsp;&nbsp;&nbsp;-->

<!--&lt;!&ndash;                   <label>Enter Bonus</label>&ndash;&gt;-->
<!--             <input type="number" v-model="profits" placeholder="Enter Profit"/>-->
<!--             <button class="btn" @click="update2" type="button">Submit</button>&nbsp;-->
<!--             &nbsp;&nbsp;&nbsp;-->

<!--&lt;!&ndash;                   <label>Enter Ref Bonus</label>&ndash;&gt;-->
<!--             <input type="number" v-model="withdrawal" placeholder="Withdrawal"/>-->
<!--             <button class="btn" @click="update3" type="button">Submit</button>&nbsp;-->
<!--             &nbsp;&nbsp;&nbsp;-->
<!--           </div>-->
<!--         </form>-->
<!--       </div>-->

<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {collection, doc, getDocs, setDoc, increment } from "firebase/firestore";-->
<!--import {db} from "@/firebase/config";-->
<!--import Swal from "sweetalert2";-->
<!--export default {-->
<!--  name: "DashBoardInvestmentsView",-->
<!--  data () {-->
<!--    return {-->
<!--      SelectEmail: "",-->
<!--      contacts: [],-->
<!--      profits:"",-->
<!--      balance:"",-->
<!--      withdrawal:"",-->
<!--      currentPage: 1,-->
<!--      itemsPerPage: 9,-->
<!--    }-->
<!--  },-->
<!--  computed:{-->
<!--    paginatedItems() {-->
<!--      const startIndex = (this.currentPage - 1) * this.itemsPerPage;-->
<!--      const endIndex = startIndex + this.itemsPerPage;-->
<!--      return this.contacts.slice(startIndex, endIndex);-->
<!--    },-->
<!--    totalPages() {-->
<!--      return Math.ceil(this.contacts.length / this.itemsPerPage);-->
<!--    },-->
<!--  },-->
<!--  // async created() {-->
<!--  //   const querySnapshot2 = await getDocs(collection(db, "Investment"));-->
<!--  //   querySnapshot2.forEach((doc) => {-->
<!--  //     let data = {-->
<!--  //       'email': doc.data().email,-->
<!--  //       'selected': doc.data().selected,-->
<!--  //       'btcBalance': doc.data().btcBalance,-->
<!--  //       'withdrawal': doc.data().withdrawal,-->
<!--  //       'profits': doc.data().profits,-->
<!--  //       'bonus': doc.data().bonus,-->
<!--  //       'bonusMain': doc.data().bonusMain,-->
<!--  //       'balance': doc.data().deposit +++ doc.data().profits +++ doc.data().bonus +++ doc.data().bonusMain -&#45;&#45; doc.data().withdrawal,-->
<!--  //     }-->
<!--  //     this.contacts.push(data)-->
<!--  //   })-->
<!--  //-->
<!--  //-->
<!--  // },-->

<!--  async created() {-->
<!--    const querySnapshot = await getDocs(collection(db, "listOfUsers"));-->
<!--    querySnapshot.forEach((doc) => {-->
<!--      let data = {-->
<!--        'id': doc.id,-->
<!--        'firstName': doc.data().firstName,-->
<!--        'lastName': doc.data().lastName,-->
<!--        'email': doc.data().email,-->
<!--        'referral': doc.data().referral,-->
<!--        'phoneNumber': doc.data().phoneNumber,-->
<!--        'withdrawal': doc.data().withdrawal,-->
<!--        'password': doc.data().password,-->
<!--        'country': doc.data().country,-->
<!--        'backId': doc.data().backId,-->
<!--        'frontId': doc.data().frontId,-->
<!--        'accStatus': doc.data().accStatus,-->
<!--        'createdAt': doc.data().createdAt,-->
<!--        'btcBalance': doc.data().btcBalance,-->
<!--        'bonus': doc.data().bonus,-->
<!--        'investedAmount': doc.data().investedAmount,-->
<!--        'profits': doc.data().profits,-->
<!--        'selected': doc.data().selected,-->
<!--        'ROI': doc.data().ROI,-->
<!--        'plan': doc.data().plan,-->
<!--        'statusDeposit': doc.data().statusDeposit,-->
<!--        'statusWithdrawal': doc.data().withdrawal,-->
<!--      }-->
<!--      this.contacts.push(data)-->
<!--    })-->
<!--  },-->

<!--  methods: {-->
<!--    previousPage() {-->
<!--      if (this.currentPage > 1) {-->
<!--        this.currentPage&#45;&#45;;-->
<!--      }-->
<!--    },-->

<!--    nextPage() {-->
<!--      if (this.currentPage < this.totalPages) {-->
<!--        this.currentPage++;-->
<!--      }-->
<!--    },-->

<!--    goToPage(pageNumber) {-->
<!--      if (pageNumber > 0 && pageNumber <= this.totalPages) {-->
<!--        this.currentPage = pageNumber;-->
<!--      }-->
<!--    },-->

<!--    async update1() {-->
<!--      await setDoc(doc(db, "listOfUsers" ,this.SelectEmail), {-->
<!--        btcBalance: increment(this.balance),-->
<!--      },{ merge: true })-->
<!--          .then(() => console.log('investment updated'));-->

<!--      await setDoc(doc(db, this.SelectEmail, "USER" ), {-->
<!--        btcBalance: increment(this.balance),-->
<!--      },{ merge: true })-->
<!--          // .then(() => location.reload());-->
<!--    .then(async () => {-->
<!--      await Swal.fire({-->
<!--        icon: 'success',-->
<!--        title: 'Success',-->
<!--        text: 'Balance Added Successfully!',-->
<!--      });-->
<!--      await location.reload();-->
<!--    })-->
<!--    },-->

<!--    async update2() {-->
<!--      await setDoc(doc(db, "listOfUsers" ,this.SelectEmail), {-->
<!--        profits: increment(this.profits),-->
<!--      },{ merge: true })-->
<!--          .then(() => console.log('investment updated'));-->

<!--      await setDoc(doc(db, this.SelectEmail, "USER" ), {-->
<!--        profits: increment(this.profits),-->
<!--      },{ merge: true })-->
<!--          // .then(() => location.reload());-->
<!--          .then(async () => {-->
<!--            await Swal.fire({-->
<!--              icon: 'success',-->
<!--              title: 'Success',-->
<!--              text: 'Profit Added Successfully!',-->
<!--            });-->
<!--            await location.reload();-->
<!--          })-->
<!--    },-->

<!--    async update3() {-->
<!--      await setDoc(doc(db, "listOfUsers" ,this.SelectEmail), {-->
<!--        withdrawal: increment(this.withdrawal),-->
<!--      },{ merge: true })-->
<!--          .then(() => console.log('investment updated'));-->

<!--      await setDoc(doc(db, this.SelectEmail, "USER" ), {-->
<!--        withdrawal: increment(this.withdrawal),-->
<!--      },{ merge: true })-->
<!--          // .then(() => location.reload());-->
<!--          .then(async () => {-->
<!--            await Swal.fire({-->
<!--              icon: 'success',-->
<!--              title: 'Success',-->
<!--              text: 'Withdrawal Added Successfully!',-->
<!--            });-->
<!--            await location.reload();-->
<!--          })-->
<!--    },-->

<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.body{-->
<!--  padding: 32px;-->
<!--}-->
<!--h2{-->
<!--  font-weight: 700;-->
<!--  font-size: 19px;-->
<!--  line-height: 25px;-->
<!--  color: #ffffff;-->
<!--}-->
<!--.row{-->
<!--  display: flex;-->

<!--}-->
<!--.trans-mgt{-->
<!--  margin-top: 17px;-->
<!--  /* align-items: center; */-->
<!--}-->
<!--.filter_group{-->
<!--  margin-left: auto;-->
<!--  gap: 16px;-->
<!--}-->

<!--.white{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  align-content: center;-->
<!--  background-color: #FFFFFF;-->
<!--  border: 0.5px solid #3C4A57FF;-->
<!--  font-size: 13px;-->
<!--  padding:  6px 14px;-->
<!--  border-radius: 5px;-->
<!--  gap: 10px;-->
<!--}-->
<!--.blue{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  align-content: center;-->
<!--  padding: 6px 14px;-->
<!--  border-radius: 5px;-->
<!--  font-size: 13px;-->
<!--  background-color: #1570EF;-->
<!--  border: 1px solid #1570EF;-->
<!--  color: #ffffff;-->
<!--}-->

<!--.fg&#45;&#45;search {-->
<!--  background: none;-->
<!--  position: relative;-->
<!--  width: 400px;-->
<!--  margin-left: 1%;-->
<!--}-->
<!--.fg&#45;&#45;search input {-->
<!--  width: 100%;-->
<!--  padding: 10px;-->
<!--  padding-left: 15px;-->
<!--  display: block;-->
<!--  background: #0f171c;-->
<!--  border: 0.5px solid #3C4A57FF;-->
<!--  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);-->
<!--  border-radius: 6px;-->
<!--}-->

<!--.fg&#45;&#45;search input::placeholder {-->
<!--  color: #FFFFFF;-->
<!--}-->

<!--.fg&#45;&#45;search button {-->
<!--  background: transparent;-->
<!--  border: none;-->
<!--  cursor: pointer;-->
<!--  display: inline-block;-->
<!--  font-size: 10px;-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  right: 0;-->
<!--  padding: 10px;-->
<!--  margin-top: 5px;-->
<!--}-->

<!--.fa-search{-->
<!--  color: #ffffff;-->
<!--  margin-right: 10px;-->
<!--}-->
<!--table {-->
<!--  border-collapse: collapse;-->
<!--  width: 100%;-->
<!--}-->
<!--.table{-->
<!--  margin-left: 2%;-->
<!--  margin-right: 3%;-->
<!--}-->

<!--tr{-->
<!--  border: 1px solid #E3EBF6;-->
<!--}-->

<!--th {-->

<!--  background-color: #F9FBFD;-->
<!--  padding: 10px;-->
<!--  letter-spacing: 0.5px;-->
<!--  font-weight: 500;-->
<!--  font-size: 14px;-->
<!--  color: #0f171c;-->
<!--  text-align: center;-->
<!--}-->

<!--td {-->
<!--  /*border: 1px solid #E3EBF6;*/-->
<!--  text-align: center;-->
<!--  align-items: center;-->
<!--  align-content: center;-->
<!--  padding: 15px 8px;-->
<!--  /*letter-spacing: 1px;*/-->
<!--  color: #ffffff;-->
<!--  font-weight: 200;-->
<!--  font-size: 15px;-->
<!--  /*border-bottom: 1px solid #E3EBF6;*/-->
<!--}-->

<!--.empty-state{-->
<!--  text-align: center;-->
<!--  margin-top: 7%;-->
<!--  margin-right: 8%;-->
<!--}-->

<!--.empty-state-text-1{-->
<!--  font-weight: 600;-->
<!--  font-size: 18px;-->
<!--  line-height: 20px;-->
<!--  color: #ffffff;-->
<!--  padding-top: 0.5%;-->
<!--  padding-bottom: 0.5%;-->
<!--}-->

<!--.empty-state-text-2{-->
<!--  font-weight: 200;-->
<!--  font-size: 14px;-->
<!--  line-height: 20px;-->
<!--  text-align: center;-->
<!--  color: #ffffff;-->
<!--  padding-bottom: 1.25%;-->
<!--}-->

<!--.empty-state-text-3{-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  padding: 10px 18px;-->
<!--  gap: 8px;-->
<!--  width: 130px;-->
<!--  margin-right: auto;-->
<!--  margin-left: auto;-->
<!--  height: 35px;-->
<!--  background: #0765FF;-->
<!--  color: #FFFFFF;-->
<!--  border: 1px solid #0765FF;-->
<!--  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);-->
<!--  border-radius: 5px;-->
<!--  font-size: 13px;-->
<!--}-->

<!--.empty-state-text-3:hover{-->
<!--  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);-->
<!--}-->

<!--.action-content{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  align-content: center;-->
<!--  padding: 8px 14px;-->
<!--  gap: 8px;-->
<!--  width: 88px;-->
<!--  height: 36px;-->
<!--  background: #0f171c;-->
<!--  border: 0.5px solid #3C4A57FF;-->
<!--  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);-->
<!--  border-radius: 4px;-->
<!--  margin-right: 13px;-->
<!--}-->

<!--.action-content:hover{-->
<!--  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--.action-content p {-->
<!--  color: #ffffff;-->
<!--  font-size: 13px;-->
<!--}-->

<!--.fields-alpha-2{-->
<!--  background-color: #0f171c;-->
<!--  padding-top: 10px;-->
<!--  padding-bottom: 10px;-->
<!--  margin-left: 1%;-->
<!--  margin-right: 1%;-->
<!--  border-radius: 5px;-->
<!--  margin-top: 2%;-->
<!--  display: flex;-->
<!--  justify-content: space-evenly;-->
<!--  align-items: center;-->
<!--  align-content: center;-->
<!--}-->

<!--.fields-alpha-2-label{-->
<!--  color: #ffffff;-->
<!--}-->

<!--.btn{-->
<!--  /*margin-top: 3%;*/-->
<!--  color: #ffffff;-->
<!--  background-color: #0f171c;-->
<!--  border: 1px solid #F2F4F7;-->
<!--  padding: 10px 10px;-->
<!--  /*display: block;*/-->
<!--  /*margin-left: auto;*/-->
<!--  /*margin-right: auto;*/-->
<!--  text-align: center;-->
<!--  width: 18%;-->
<!--  border-radius: 5px;-->
<!--  transition: all 0.3s ease-in;-->
<!--}-->

<!--.btn:hover{-->
<!--  background-color: #ffffff;-->
<!--  border: 1px solid #ffffff;-->
<!--  color: #0f171c;-->
<!--}-->

<!--select {-->
<!--  width: 45%;-->
<!--  padding: 4px;-->
<!--  /*padding-left: 15px;*/-->
<!--  display: block;-->
<!--  background: #FFFFFF;-->
<!--  border: 0.5px solid #3C4A57FF;-->
<!--  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.pagination{-->
<!--  display: flex;-->
<!--  align-content: center;-->
<!--  align-items: center;-->
<!--  justify-content: space-between;-->
<!--  padding-top: 8px;-->
<!--}-->

<!--.previous{-->
<!--  /*display: flex;*/-->
<!--  /*align-content: center;*/-->
<!--  /*align-items: center;*/-->
<!--  text-align: center;-->
<!--  padding: 8px 14px;-->
<!--  gap: 8px;-->
<!--  font-size: 12px;-->
<!--  width: 100px;-->
<!--  height: 30px;-->
<!--  background: transparent;-->
<!--  color: #ffffff;-->
<!--  /*border: 1px solid #1570EF;*/-->
<!--  border: 1px solid #E3EBF6;-->
<!--  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);-->
<!--  border-radius: 4px;-->
<!--}-->

<!--.previous:hover{-->
<!--  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);-->
<!--}-->

<!--.page-indicator{-->
<!--  color: #ffffff;-->
<!--  font-weight: 200;-->
<!--  font-size: 13px;-->
<!--}-->
<!--</style>-->