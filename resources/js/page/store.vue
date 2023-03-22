<template>
	<div>
		<div class="row row-sm">
			<div class="col-sm-6 col-lg-6 col-xl-3">
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col">
								<div class="">App Views</div>
								<div class="h3 mt-2 mb-2"><b>19.89K</b><span class="text-success tx-13 ms-2">(+25%)</span>
								</div>
							</div>
							<div class="col-auto align-self-center ">
								<div class="feature mt-0 mb-0">
									<i class="fe fe-eye project bg-primary-transparent text-primary "></i>
								</div>
							</div>
						</div>
						<div class="">
							<p class="mb-1">Overview of Last month</p>
							<div class="progress progress-sm h-1 mb-1">
								<div class="progress-bar bg-primary wd-80 " role="progressbar"></div>
							</div>
							<small class="mb-0 text-muted">Monthly<span class="float-end text-muted">60%</span></small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-lg-6 col-xl-3">
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col">
								<div class="">New Users</div>
								<div class="h3 mt-2 mb-2"><b>692</b><span class="text-success tx-13 ms-2">(+15%)</span>
								</div>
							</div>
							<div class="col-auto align-self-center ">
								<div class="feature mt-0 mb-0">
									<i class="fe fe-users project bg-pink-transparent text-pink "></i>
								</div>
							</div>
						</div>
						<div class="">
							<p class="mb-1">Overview of Last month</p>
							<div class="progress progress-sm h-1 mb-1">
								<div class="progress-bar bg-secondary wd-50 " role="progressbar"></div>
							</div>
							<small class="mb-0 text-muted">Monthly<span class="float-end text-muted">50%</span></small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-lg-6 col-xl-3">
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col">
								<div class="">Churned Users</div>
								<div class="h3 mt-2 mb-2"><b>286</b><span class="text-success tx-13 ms-2">(+08%)</span>
								</div>
							</div>
							<div class="col-auto align-self-center ">
								<div class="feature mt-0 mb-0">
									<i class="ti-pulse project bg-warning-transparent text-warning "></i>
								</div>
							</div>
						</div>
						<div class="">
							<p class="mb-1">Overview of Last month</p>
							<div class="progress progress-sm h-1 mb-1">
								<div class="progress-bar bg-danger wd-30 " role="progressbar"></div>
							</div>
							<small class="mb-0 text-muted">Monthly<span class="float-end text-muted">30%</span></small>
						</div>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-lg-6 col-xl-3">
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col">
								<div class="">Total Revenue</div>
								<div class="h3 mt-2 mb-2"><b>$2.98M</b><span class="text-success tx-13 ms-2">(+35%)</span>
								</div>
							</div>
							<div class="col-auto align-self-center ">
								<div class="feature mt-0 mb-0">
									<i class="ti-bar-chart-alt project bg-success-transparent text-success "></i>
								</div>
							</div>
						</div>
						<div class="">
							<p class="mb-1">Overview of Last month</p>
							<div class="progress progress-sm h-1 mb-1">
								<div class="progress-bar bg-success wd-25 " role="progressbar"></div>
							</div>
							<small class="mb-0 text-muted">Monthly<span class="float-end text-muted">25%</span></small>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="row row-sm">
			<div class="col-xl-12">
				<div class="card">
					<div class="card-header pb-0">
						<div class="d-flex justify-content-between">
							<h2 class="card-title mg-b-0">ລາຍການສິນຄ້າ</h2>
							<div class="btn">
								<button class="btn btn-primary-gradient" v-if="!FormShow"
									@click="add_store()">ເພີ່ມຂໍ້ມູນ</button>
								<button class="btn btn-success-gradient me-2" @click="add_product"
									v-if="FormShow">ບັນທຶກ</button>
								<button class="btn btn-danger-gradient" v-if="FormShow"
									@click="hid_store()">ຍົກເລິກ</button>
							</div>
						</div>
						<p class="tx-12 tx-gray-500 mb-2"> <a href=""></a></p>
					</div>
					<div class="card-body">

						<!-- FormShow :   {{  FormShow }} <hr>
							FormProduct: {{ FormProduct }} <hr> -->
						<!-- Data: {{ FormData }}  -->
						<!-- <button @click="showAlert()">Hello world</button> -->
						<div class="form-store" v-if="FormShow">
							<div class="row">
								<div class="col-md-3">

								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label for="product-name">ຊື່ສິນຄ້າ</label>
												<input type="text" class="form-control" v-model="FormProduct.name"
													id="product-name" placeholder="...">
											</div>
											<div class="form-group">
												<label for="qty">ຈຳນວນ</label>
												<cleave :options="options" class="form-control" v-model="FormProduct.qty" id="qty"
													placeholder="..."  />
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label for="price-buy">ລາຄາຊື້</label>
												<cleave :options="options" class="form-control" v-model="FormProduct.price_buy"
													id="price-buy" placeholder="..." />
											</div>
										</div>

										<div class="col-md-6">
											<div class="form-group">
												<label for="price-sell">ລາຄາຂາຍ</label>
												<cleave :options="options" class="form-control" v-model="FormProduct.price_sell"
													id="price-sell" placeholder="..." />
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>


						<div class="table-responsive" v-if="!FormShow">
							<table class="table table-striped mg-b-0 text-md-nowrap">
								<thead>
									<tr>
										<th width="30">#</th>
										<th>ຊື່ສິນຄ້າ</th>
										<th width="80">ຈຳນວນ</th>
										<th width="180">ລາຄາຊື້</th>
										<th width="120">ຈັດການ</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="list in FormData" :key="list.id">
										<th scope="row">{{ list.id }}</th>
										<td> {{ list.name }} </td>
										<td>{{ list.qty }}</td>
										<td>{{ formatPrice(list.price_buy) }}</td>
										<td class="btn-icon-list"><button class="btn btn-success btn-icon"
												@click="edit_product(list.id)"><i class="fa fa-edit"></i></button>
											<button class="btn btn-danger btn-icon" @click="del_product(list.id)"><i
													class="far fa-trash-alt"></i></button>
										</td>
									</tr>

								</tbody>
							</table>
						</div><!-- bd -->
					</div><!-- bd -->
				</div><!-- bd -->
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'MiniposAppStore',

	data() {
		return {
			FormShow: false,
			FormType: true,
			FormID: '',
			FormData: [{ "id": 812, "name": "Product-001", "qty": "12", "price_buy": "21000", "price_sell": "25000" }, { "id": 725, "name": "Product-002", "qty": "20", "price_buy": "12000", "price_sell": "15000" }],
			FormProduct: {
				name: '',
				qty: '',
				price_buy: '',
				price_sell: ''
			},
			options: {
				//    prefix: '$',
                   numeral: true,
				   numeralPositiveOnly: true,
				   noImmediatePrefix: true,
				   numeralIntegerScale: 10,
				   numeralDecimalScale: 2,
				   numeralDecimalMark: '.',
				   delimiter: ','
                }
		};
	},

	mounted() {

	},

	methods: {
		formatPrice(value){
			let val = (value / 1).toFixed(0).replace(",",".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		add_store() {
			this.FormShow = true,
				this.FormType = true;
		},

		hid_store() {
			this.FormShow = false
		},
		add_product() {

			if (this.FormType) {
				//ເພີ່ມຂໍ້ມູນໃໝ່
				this.FormData.push({
					id: Math.floor(Math.random() * 1000),
					name: this.FormProduct.name,
					qty: this.FormProduct.qty,
					price_buy: this.FormProduct.price_buy,
					price_sell: this.FormProduct.price_sell
				});

			} else {
				//ອັບເດດຂໍ້ມູນ
				console.log(`Update Data!`);
				this.FormData.find((i) => i.id == this.FormID).name = this.FormProduct.name;
				this.FormData.find((i) => i.id == this.FormID).qty = this.FormProduct.qty;
				this.FormData.find((i) => i.id == this.FormID).price_buy = this.FormProduct.price_buy;
				this.FormData.find((i) => i.id == this.FormID).price_sell = this.FormProduct.price_sell;
			}

			this.FormProduct.name = '';
			this.FormProduct.qty = '';
			this.FormProduct.price_buy = '';
			this.FormProduct.price_sell = '';
			this.FormID = '';


			this.FormShow = false;
		},

		edit_product(id) {
			console.log(`edit id: ${id}`);

			let item = this.FormData.find((i) => i.id == id); // ຄົ້ນຫາຂໍ້ມູນ ແລະ ທຽບຄ່າດ້ວຍ id ເລືອກຕົວທີ່ id ຕົງກັນອອກມາ 

			this.FormShow = true; // ສະແດງຟອມ
			this.FormType = false; // ເມື່ອແກ້ໄຂໃຫ້ກຳນົດຄ່າ ເປັນ false
			this.FormID = id;

			this.FormProduct.name = item.name;
			this.FormProduct.qty = item.qty;
			this.FormProduct.price_buy = item.price_buy;
			this.FormProduct.price_sell = item.price_sell;
		},

		del_product(id) {
			// console.log(`edit id: ${id}`);

			this.$swal.fire({
				title: 'ທ່່ານແນ່ໃຈບໍ່?',
				text: "ທີ່ຈະລົບຂໍ້ມູນນີ້!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'ຢືນຢັນລົບ!',
				cancelButtonText: 'ຍົກເລິກ!'
			}).then((result) => {
				if (result.isConfirmed) {

					let index = this.FormData.map((i) => i.id).indexOf(id);
					this.FormData.splice(index, 1);

					// ຂຽນຄຳສັ່ງ ຕິດຕໍ່ຖານຂໍ້ມູນ
					this.$swal.fire(
						'ລົບສຳເລັດ!',
						'ຂໍ້ມູນໄດ້ຖຶກລົບສຳເລັດ.',
						'success'
					);

					// this.$swal.fire(
					// 	'ລົບສຳເລັດ!',
					// 	'ຂໍ້ມູນໄດ້ຖຶກລົບສຳເລັດ.',
					// 	'warnnig'
					// )
				}
			});
		},

		showAlert() {
			// Use sweetalert2
			// this.$swal('Hello Vue world!!!');

			
		},
	},
};
</script>

<style lang="scss" scoped></style>