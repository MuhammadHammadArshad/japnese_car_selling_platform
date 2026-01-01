<template>
  <div class="price-quote-desktop desktop-view">
    <div class="container">
      <div class="row">
        <p class="topTitle m-0 my-4">お問い合わせを送信する</p>
        <p class="subHeading m-0">
          任意項目をご入力いただくか、そのまま送信してください。
        </p>
        <p class="underDiscussion m-0 my-3">ご相談中の車両</p>
        <div class="imageSection d-flex align-items-start gap-2">
          <NuxtImg
            src="/assets/images/favCar.webp"
            alt="car-img"
            class="img-fluid rounded-2"
            width="112"
            height="74"
            loading="lazy"
          />
          <p class="para m-0">
            トヨタ <br />アルファード　2.5 Z 4WD　革シート フリップダウン
            ツインルーフ
          </p>
        </div>
        <table class="table table-borderless align-middle my-3">
          <tbody>
            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">お問い合わせ内容</p>
                <p class="m-0 note">※必須</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <div class="form-check">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      id="option1"
                    />
                    <label class="form-check-label" for="option1"
                      >在庫確認</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      id="option2"
                    />
                    <label class="form-check-label" for="option2"
                      >在庫確認
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      id="option3"
                    />
                    <label class="form-check-label" for="option3"
                      >来店希望</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      id="option4"
                    />
                    <label class="form-check-label" for="option4"
                      >車両状態確認</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      id="option5"
                    />
                    <label class="form-check-label" for="option5"
                      > その他</label
                    >
                  </div>
                </div>

                <!-- Bottom: Textarea -->
                <div class="form-group">
                  <textarea
                    class="form-control rounded-0 centerText"
                    rows="2"
                    placeholder="追加の質問／要望を入力してください（任意・500文字まで）"
                  ></textarea>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">お名前</p>
                <p class="m-0 note">※必須</p>
              </td>

              <!-- Center Side -->
              <td class="col-6">
                <!-- Top: Checkboxes -->
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 centerText">hafiz　gull</p>
                </div>
              </td>

              <!-- Right Side -->
              <td class="col-3">
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 text-end text-nowrap textRight">修正する</p>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">フリガナ</p>
                <p class="m-0 note">※必須</p>
              </td>

              <!-- Center Side -->
              <td class="col-6">
                <!-- Top: Checkboxes -->
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 centerText">ハフィズ　カモメ</p>
                </div>
              </td>

              <!-- Right Side -->
              <td class="col-3">
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 text-end text-nowrap textRight">修正する</p>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">メールアドレス</p>
                <p class="m-0 note">※必須</p>
              </td>

              <!-- Center Side -->
              <td class="col-6">
                <!-- Top: Checkboxes -->
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 centerText">hafizgraphics441@gmail.com</p>
                </div>
              </td>

              <!-- Right Side -->
              <td class="col-3">
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 text-end text-nowrap textRight">修正する</p>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">郵便番号</p>
                <p class="m-0 note">※必須</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div class="mb-3 d-flex flex-wrap gap-3">
                  <p class="m-0 centerText">470-0162</p>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">電話番号</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 d-flex flex-wrap gap-3 align-items-center centerText"
                >
                  <input
                    type="text"
                    class="form-control w-25 rounded-0 shadow-none centerText"
                    placeholder="521561554"
                  /><span>ハイフンなしで入力</span>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">電話番号</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 d-flex flex-wrap gap-3 align-items-center centerText"
                >
                  <input
                    type="text"
                    class="form-control w-25 rounded-0 shadow-none centerText"
                    placeholder="521561554"
                  /><span>ハイフンなしで入力</span>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">電話番号</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 mt-2 d-flex flex-wrap gap-3 align-items-center"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault1">
                      あり
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault2"
                    />
                    <label class="form-check-label" for="radioDefault2">
                      なし
                    </label>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">年代/性別</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 mt-2 d-flex flex-wrap gap-3 align-items-center"
                >
                  <select
                    class="form-select w-50 rounded-0 shadow-none centerText"
                    aria-label="Default select example"
                  >
                    <option selected>指定なし</option>
                    <option value="1">指定なし</option>
                    <option value="2">指定なし</option>
                    <option value="3">指定なし</option>
                  </select>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault3"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault3">
                      男性
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault4"
                    />
                    <label class="form-check-label" for="radioDefault4">
                      女性
                    </label>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">購入希望時期</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 mt-2 d-flex flex-wrap gap-3 align-items-center"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault5"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault5">
                      〜1ヶ月
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault6"
                    />
                    <label class="form-check-label" for="radioDefault6">
                      〜2ヶ月
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault7"
                    />
                    <label class="form-check-label" for="radioDefault7">
                      〜3ヶ月
                    </label>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">車庫証明</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 mt-2 d-flex flex-wrap gap-3 align-items-center"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault8"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault8">
                      申請を希望する
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault9"
                    />
                    <label class="form-check-label" for="radioDefault9">
                      申請を希望しないなし
                    </label>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <!-- Left Side -->
              <td class="col-3 text-left fw-bold leftTR">
                <p class="m-0 textLeft">自宅への納車</p>
              </td>

              <!-- Right Side -->
              <td class="col-9">
                <!-- Top: Checkboxes -->
                <div
                  class="mb-3 mt-2 d-flex flex-wrap gap-3 align-items-center"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault10"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault10">
                      希望する
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault11"
                    />
                    <label class="form-check-label" for="radioDefault11">
                      希望しない
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="disclaimer d-flex justify-content-center my-3">
          <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkChecked"
          />
          <label class="form-check-label" for="checkChecked">
            SATから最新入荷情報やお得なキャンペーンのお知らせを受け取る
          </label>
        </div>
        </div>

        <div class="agrement">
          <button type="button" class="btn-disable">必須項目を入力し</button>
          <button type="button" class="btn-active">同意して送信する</button>
          <p class="m-0">上記及び個人情報の取り扱いについて、利用規約に同意する</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-quote-desktop .topTitle {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}
.price-quote-desktop .subHeading {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}
.price-quote-desktop .underDiscussion {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.price-quote-desktop .imageSection .para {
  color: #08202e;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.price-quote-desktop .table {
  border: 1px solid #94a3b8;
}
.price-quote-desktop .table tr {
  border-bottom: 1px solid #94a3b8;
}
.price-quote-desktop .table tr .leftTR {
  background: #f6f6f8;
  padding: 24px 12px;
}
.price-quote-desktop .table tr .centerText {
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
}
.price-quote-desktop .table tr .textRight {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  text-decoration: underline;
  cursor: pointer;
}
.price-quote-desktop .table tr .textLeft {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  padding-bottom: 10px;
}
.price-quote-desktop .table tr td .note {
  background-color: #2384c1;
  color: white;
  padding: 2px 6px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border-radius: 4px;
  width: max-content;
}
.price-quote-desktop .agrement {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #ECF5FF;
    padding: 20px 0px;
}
.price-quote-desktop .agrement .btn-disable{
    background-color: #98A2B3;
    height: 48px;
    border-radius: 4px;
    color: white;
    margin: 10px 291px;

}
.price-quote-desktop .agrement .btn-active{
    background-color: #2384C1;
    height: 48px;
    border-radius: 4px;
    color: white;
    margin: 10px 291px;
}
.price-quote-desktop .agrement p{
    color:#08202E;
    font-size:14px;
    font-weight: 500;
    font-family:"Inter";
    line-height: 20px;
}
.form-check-input:checked {
  background-color: #2384c1;
  border-color: #3184c1;
}
.form-check-label {
  font-family: #000000;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 17.54px;
}
</style>
