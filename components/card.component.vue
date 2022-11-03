<template>
  <div
    class="flex flex-col bg-white border rounded-sm w-100 hover:border-blue-600 hover:border-2"
  >
    <div class="p-4">
      <div class="flex items-center justify-between">
        <div class="flex">
          <div
            style="background: #2f80ed"
            class="flex items-center justify-center w-12 h-12 rounded-full"
          >
            <img :src="service" class="w-6 h-6" alt="" />
          </div>
          <div class="ml-2">
            <h2 style="color: #576f7f" class="text-lg font-semibold">
              {{
                github_handle === undefined || github_handle.length === 0
                  ? 'Developer'
                  : github_handle
              }}
            </h2>
            <em style="color: #576f7f" class="text-sm">
              <div class="card-tags-dev">Civil Engineering</div>
            </em>
          </div>
        </div>
        <div>
          <font-awesome-icon
            :icon="['fab', 'periscope']"
            style="color: #576f7f"
            class="w-5 h-5 text-white rounded-full"
          />
          <em style="color: #576f7f" class="text-sm"> {{ city }}</em>
        </div>
      </div>
      <div class="h-{100px}">
        <div class="pt-2 card-tags">
          <p style="color: #576f7f" class="mx-6 my-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
      </div>
    </div>
    <div style="height: 1px; background: #d8d8d8" class="w-full" />
    <div style="background: #f7f7f7" class="flex justify-between p-2">
      <div>
        <button @click="$modal.show('my-modal-mail')">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            style="color: #2f80ed"
            class="w-5 h-5 m-2 text-white rounded-full"
          />
        </button>
        <modal name="my-modal-mail">
          <div class="modal-content">
            <div class="flex justify-center">
              <h2
                style="color: #576f7f"
                class="text-lg font-semibold text-center"
              >
                E-Mail
              </h2>
            </div>
            <div class="flex justify-center items-center">
              <p>emailtest@myemail.test</p>
            </div>
            <div>
              <button
                class="bg-[#576f7f] rounded-md px-4 py-1 text-white mt-4 mx-2 w-[100px]"
              >
                Ecrire
              </button>
              <button
                class="bg-red-500 rounded-md px-4 py-1 text-white mt-4 mx-2 w-[100px]"
                @click="$modal.hide('my-modal-mail')"
              >
                Fermer
              </button>
            </div>
          </div>
        </modal>
        <button @click="$modal.show('my-modal-phone')">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            style="color: #2f80ed"
            class="w-5 h-5 m-2 text-white rounded-full"
          />
        </button>
        <modal name="my-modal-phone">
          <div class="modal-content">
            <div class="flex justify-center">
              <h2
                style="color: #576f7f"
                class="text-lg font-semibold text-center"
              >
                Phone
              </h2>
            </div>
            <div class="flex justify-center items-center">
              <p>(+237) 699 99 99 99</p>
            </div>
            <div>
              <button
                class="bg-[#576f7f] rounded-md px-4 py-1 text-white mt-4 mx-2 w-[100px]"
              >
                Appeler
              </button>
              <button
                class="bg-red-500 rounded-md px-4 py-1 text-white mt-4 mx-2 w-[100px]"
                @click="$modal.hide('my-modal-phone')"
              >
                Fermer
              </button>
            </div>
          </div>
        </modal>
      </div>
      <font-awesome-icon
        :icon="['fas', 'share']"
        style="color: #2f80ed"
        class="w-5 h-5 m-2 text-white rounded-full"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    github_handle: {
      type: String,
    },
    gitlab_handle: {
      type: String,
    },
    city: {
      type: String,
    },
    developer_type: {
      type: String,
    },
    fav_frameworks: {
      type: String,
    },
    fav_languages: {
      type: String,
    },
  },
  data() {
    return {
      service: require('../assets/service.png'),
    }
  },
}
</script>
<style>
header,
h2 {
  margin-bottom: 20px;
}
.modal-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
