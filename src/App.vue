<template>
	<div id="app" class="app-search container">
		<h2 class="text-center">Darko Boshkov's Test</h2>
		<div class="app-search__bar mt-3">
			<b-form-input v-model="search" @keyup="searchImage"/>
		</div>
		<div class="app-search__result">
			<b-row>
				<template v-if="images.length">
					<b-col
							sm="3"
							v-for="image in images"
							:key="image.id"
					>
						<image-box :image="image"/>
					</b-col>
				</template>
				<b-col v-else sm="12">
					<no-result />
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
  import ImageBox from "./components/ImageBox"
  import NoResult from "./components/NoResult"
  import { debounce } from "lodash";

  const apiKey = process.env.VUE_APP_API_KEY;

  export default {
    name: 'App',
    components: {
      NoResult,
      ImageBox
    },
    data() {
      return {
        search: "",
        images: []
      }
    },
    methods: {
      searchImage: debounce(function () {
        this.$http.get(`?key=${apiKey}&q=${this.search}`).then((response) => {
          if (response?.data?.hits) {
            this.images = response.data.hits
          }
        })
      }, 200)
    }
  }
</script>
