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
              <div
                v-for="(item, myIndex) in developer_type.slice(0, 1)"
                :key="myIndex"
                class="card-tags-dev"
              >
                {{ item }}
              </div>
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
          <span class="hover:bg-blue-500">Developer</span>
        </div>
      </div>
    </div>
    <div style="height: 1px; background: #d8d8d8" class="w-full" />
    <div style="background: #f7f7f7" class="flex justify-between p-2">
      <div>
        <a :href="`https://github.com/` + github_handle" target="_blank">
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            style="color: #2f80ed"
            class="w-5 h-5 p-2 text-white rounded-full"
          />
        </a>
        <a :href="`https://gitlab.com/` + gitlab_handle" target="_blank">
          <font-awesome-icon
            :icon="['fas', 'phone']"
            style="color: #2f80ed"
            class="w-5 h-5 p-2 text-white rounded-full"
          />
        </a>
      </div>
      <div>
        <a :href="`https://gitlab.com/` + gitlab_handle" target="_blank">
          <font-awesome-icon
            :icon="['fas', 'share']"
            style="color: #2f80ed"
            class="w-5 h-5 p-2 text-white rounded-full"
          />
        </a>
      </div>
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
