import { svgService } from "../../../services/svg.service.js"
import { emailService } from "../services/emailService.js"

export default {
  name: 'Side Nav', 
  props: ['emails'],
  template: `
  <section class="side-nav">

          <section @click="filterStatus('inbox')" data-title="Inbox" class="side-nav-item inbox" :class= "clickedClass('inbox')">
                  <div @click = "loadCountUnread" class="icon" v-html="getSvg('inbox')"></div>
    <div>
            <span>Inbox</span>
            <span class="unread-count">{{countUnread}}</span>
        </div>
</section>

<section class="side-nav-item" @click="filterStarred" @click="clickedStar"  :class= "{'clicked-side-nav': isStar}" >
        <div class="icon" v-html="getSvg('star')"></div>
        <span>Starred</span>
</section>
<section  @click="filterStatus('important')" class="side-nav-item" :class= "clickedClass('important')">
        <div class="icon" v-html="getSvg('important')"></div>
        <span>Important</span>
</section>
<section @click="filterStatus('sent')" class="side-nav-item" :class= "clickedClass('sent')">
        <div class="icon" v-html="getSvg('sent')"></div>
        <span>Sent</span>
</section>
<section  @click="filterStatus('drafts')" class="side-nav-item" :class= "clickedClass('drafts')">
        <div class="icon" v-html="getSvg('drafts')"></div>
        <span>Draft</span>
</section>
<section  @click="filterStatus('trash')" class="side-nav-item" :class= "clickedClass('trash')">
        <div class="icon" v-html="getSvg('trash')"></div>
        <span>Trash</span>
</section>


</section>
`,
components:{},
created() {
        this.status = 'inbox'
        this.loadCountUnread()
  
},
data() {
    return {
        status: '',
        isStar: false,
        countUnread: 0,
    }
  },
  methods: {
loadCountUnread(){
        setTimeout(()=> {
                   let unreadCounter = 0
                   this.emails.forEach(email => {
                   if(email.isRead) unreadCounter++
                   })
                this.countUnread = unreadCounter

        },500)
                  },
     getSvg(iconName) {
    return svgService.getMailSvg(iconName)
  },

  filterStatus(status){
        this.isStar = false
        this.status = status
        this.$emit('filterStatus', {keyWord: 'status', toUpdate: status})
        this.$emit('closeDetails')
  },
  filterStarred(){
        // console.log('hey');
        this.$emit('filterStarred')
        this.$emit('closeDetails')

  },
  clickedClass(status){
        if(this.status === status){
        return 'clicked-side-nav'
        }
},
  clickedStar(){
        this.isStar = true
        this.status = ''
  },

},

computed: {
  },
  watch:{
       
  }
}

