export function createClothesStore() {
  return {
    shirt: {},
    pants: {},
    shoes: {},
    props: {
      toast: false,
      completedSets: localStorage.getItem('completed') || 0,
      currentSet: 0,
      startTime: new Date(),
      diffTime: '',
      itemsCnt: 0,
    },
    addItem(item) {
      this[item?.type] = {
        id: item.id,
        name: item.name,
        brand: item.brand,
        color: item.color,
        size: item.size,
      };
      this.props.toast = true;

      if (this.props.itemsCnt < 3) this.props.itemsCnt++;
    },
    handleCompletedSet() {
      if (
        Object.keys(this.shirt).length !== 0 &&
        Object.keys(this.pants).length !== 0 &&
        Object.keys(this.shoes).length !== 0
      ) {
        console.log('if yes', this.props.completedSets);

        this.props.diffTime =
          new Date().getTime() - this.props.startTime.getTime();
        this.props.startTime = new Date();
        localStorage.setItem(
          'completed',
          JSON.stringify(+this.props.completedSets + 1)
        );
      } else {
        return this.props.completedSets;
      }
    },
    closeToast() {
      this.props.toast = false;
    },

    resetStore() {
      this.props = {
        toast: false,
        completedSets: localStorage.getItem('completed') || 0,
        currentSet: 0,
        startTime: new Date(),
        diffTime: '',
        itemsCnt: 0,
      };
      this.shirt = {};
      this.pants = {};
      this.shoes = {};
      console.log(this);
    },
  };
}
