<template>
  <div>
    <main id="content">
      <div class="post-profile" >
        <div class="post">
          <div class="info-post">
            <div class="info-post-top">
              <div class="info-post-top-left">
                <span>Himalayan sunset</span>
              </div>
              <div class="info-post-top-right">
                <span class="info-post-top-right-text">49 minutes ago</span>
                <img src="@/components/assets/Badge/Small/Vector.png" alt="">
              </div>

            </div>
            <div class="info-post-middle">
              <img src="@/components/assets/Badge/Small/image 2022.png" alt="" class="info-post-middle-image">
            </div>
            <div class="who-commented">
              <img src="@/components/assets/Badge/Small/Union.png" alt="" class="who-commented-image">
              <span><a href="" style="text-decoration: none; color: #2375e1;">Kirill Dashkevich</a> commented:</span>
            </div>
            <div class="comment">
              <div class="comment-text">
                The sun disappearing behind the Himalayas.
                This was taken from near the Tungnath temple
                (~3500m) in the Garwhal Himalayas near Chopta.
                I think this is probably my favourite of all of the sunset photos
              </div>
              <div class="comment-author">
                — Kirill, 10:39 am
              </div>
            </div>
            <div class="info-post-bottom">
              <div class="info-post-bottom-left">
                <img src="@/components/assets/Badge/Small/Eye.png" alt="" class="info-post-bottom-left">
                <span class="info-post-bottom-left viewers">438</span>
                <img src="@/components/assets/Badge/Small/Union.png" alt="" class="info-post-bottom-left">
                <span class="info-post-bottom-left">71</span>
              </div>
              <div class="info-post-bottom-right">
                <span class="post-bottom-right-text">Read post</span>
                <img src="@/components/assets/Badge/Small/Right vector.png" alt="" class="info-post-bottom-right">
              </div>
            </div>
          </div>
          <div class="conservation">
            <span>Conservation with James</span>
            <img src="@/components/assets/Header/Tabs/Small/Vectordown.png" alt="">
          </div>
        </div>
        <div class="right-bar">
          <div class="profile">
            <img src="@/components/assets/Badge/Small/Intersect.png" alt="" class="profile-photo">
            <span class="profile-name">Harold Pain</span>
            <span class="profile-specialization">UX/UI designer</span>
            <img src="@/components/assets/Badge/Small/Frame 674.png" alt="" class="profile-banner">
          </div>
          <div class="navigation">
            <div class="nav-head">
              <span style="font-size: 16px;">Navigation</span>
              <button class="nav-head-button"><img src="@/components/assets/Header/Tabs/Small/Vectordown.png" alt=""></button>
            </div>
            <div class="nav-body">
              <div class="nav-body-item nav-1">
                <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt=""  class="nav-image">
                <span class="nav-text">My profile</span>
              </div>
              <div class="nav-body-item nav-2">
                <div class="nav-2-left">
                  <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="nav-image">
                  <span class="nav-text">Balance</span>
                </div>
                <div class="nav-2-right">
                  <span style="color: #a1a5ae; font-size: 14px;">$1,456</span>
                </div>
              </div>
              <div class="nav-body-item nav-3">
                <div class="nav-3-left">
                  <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="nav-image">
                  <span class="nav-text">Connections</span>
                </div>
                <div class="nav-3-right">
                  <span style="font-size: 14px;" class="nav-3-text">47</span>
                </div>
              </div>
              <div class="nav-body-item nav-4">
                <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="nav-image">
                <span class="nav-text">Friends</span>
              </div>
            </div>
            <div class="nav-tail">
              <div class="nav-body-item nav-3">
                <div class="nav-5-left">
                  <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="nav-image">
                  <span class="nav-text">Connections</span>
                </div>
                <div class="nav-5-right">
                  <span style="font-size: 14px;" class="nav-5-text">47</span>
                </div>
              </div>
              <div class="nav-body-item nav-6">
                <img src="@/components/assets/Header/Icon button/Small/Chevron/People.png" alt="" class="nav-image">
                <span class="nav-text">Account settings</span>
              </div>
            </div>
          </div>
          <div class="navigation share">
            <div class="nav-head">
              <span style="font-size: 16px;">Share your thoughts</span>
              <button class="nav-head-button"><img src="@/components/assets/Header/Tabs/Small/Vectordown.png" alt=""></button>
            </div>
            <div class="share-message-area">
              <textarea
                cols="30"
                rows="10"
                class="share-message"
                placeholder="Enter your message..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background-color: #f4f7fb;
}

.post-profile {
  margin: 25px 32px 0 27px;
  display: flex;
  justify-content: space-between;
}

.post {
  width: 872px;
  flex-grow: 1;
}

.info-post {
  background-color: white;
  height: auto;
  padding: 16px;
  min-height: 250px;
  border: 1px solid #dde0e6;
}

.info-post-top {
  display: flex;
  justify-content: space-between;
}

.info-post-top-right-text {
  padding-right: 15px;
}

.info-post-middle {
  margin-top: 15px;
  height: auto;
}

.info-post-middle-image {
  width: 100%;
  height: auto;
}

.who-commented {
  margin-top: 10px;
}

.who-commented-image {
  vertical-align: middle;
}

.comment {
  margin-top: 16px;
  border-left: 2px solid #c4c4c4;
}

.comment-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-left: 16px;
  font-size: 14px;
  color: #2d2f33;
}

.comment-author {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-left: 16px;
  color: #6e7178;
  font-size: 14px;
}

.info-post-bottom {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}

.info-post-bottom-left {
  padding-right: 5px;
  vertical-align: middle;
}

.viewers {
  padding-right: 9px;
}

.info-post-bottom-right {
  vertical-align: middle;
}

.post-bottom-right-text {
  color: #6e7178;
  font-size: 14px;
  padding-right: 5px;
}

.conservation {
  margin-top: 24px;
  background-color: white;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #dde0e6;
}

.right-bar {
  margin-left: 16px;
  width: 352px;
  height: 910px;
}

.profile {
  height: 312px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #dde0e6;
  justify-content: space-around;
  padding-top: 32px;
  padding-bottom: 32px;
}

.profile-name {
  font-size: 18px;
  line-height: 24px;
}

.profile-specialization {
  font-size: 14px;
  color: #a1a5ae;
}

.profile-banner {
  margin-top: 10px;
}

.navigation {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dde0e6;
  background-color: white;
}

.nav-head {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #dde0e6;
}

.nav-head-button {
  outline: none;
  border: 0;
  background: transparent;
}

.nav-body {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px 24px 0 24px;
  border-bottom: 1px solid #dde0e6;
}

.nav-image {
  vertical-align: middle;
}

.nav-text {
  padding-left: 10px;
  vertical-align: middle;
}

.nav-body-item {
  width: auto;
  height: 48px;
}

.nav-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-3-text {
  vertical-align: middle;
  color: white;
  background: #ef4115;
  border-radius: 8px;
  padding: 0.01px 5px;
}

.nav-5-text {
  vertical-align: middle;
  color: white;
  background: #26a69a;
  border-radius: 8px;
  padding: 0.01px 5px;
}

.nav-tail {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 12px 24px;
}

.share {
  width: 352px;
  height: 190px;
}

.share-message {
  border: 1px solid #dde0e6;
  width: 304px;
  height: 110px;
}

.share-message-area {
  padding: 16px 24px;
  display: flex;
  justify-content: center;
}

textarea {
  resize: none;
  padding: 12px 24px;
}
</style>
