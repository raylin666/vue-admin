import type { Ref } from 'vue';
import { ref, unref, computed } from 'vue';

function pagination<T = any>(list: T[], pageNo: number, per_page: number): T[] {
  const offset = (pageNo - 1) * Number(per_page);
  const ret =
    offset + Number(per_page) >= list.length
      ? list.slice(offset, list.length)
      : list.slice(offset, offset + Number(per_page));
  return ret;
}

export function usePagination<T = any>(list: Ref<T[]>, per_page: number) {
  const currentPage = ref(1);
  const pageSizeRef = ref(per_page);

  const getPaginationList = computed(() => {
    return pagination(unref(list), unref(currentPage), unref(pageSizeRef));
  });

  const getTotal = computed(() => {
    return unref(list).length;
  });

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  function setPageSize(per_page: number) {
    pageSizeRef.value = per_page;
  }

  return { setCurrentPage, getTotal, setPageSize, getPaginationList };
}
