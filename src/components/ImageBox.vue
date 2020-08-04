<template>
	<div class="image-box">
		<div class="image-box__preview">
			<img v-if="image.previewURL" :src="image.previewURL" alt="Image">
		</div>
		<div class="image-box__content mt-3">
			<div class="image-box__author">
				{{image.user}}
			</div>
			<div class="image-box__ID ">
				{{image.id}}
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "ImageBox",
		props: {
      image: {
        default: {
          previewURL: "",
          user: "",
          userImageURL: "",
          id: ""
				}
			}
		}
  }
</script>

<style scoped>

</style>
