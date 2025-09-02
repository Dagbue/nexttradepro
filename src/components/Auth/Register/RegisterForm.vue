<template>
  <div class="login-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    <div class="background-overlay"></div>

    <!-- Signup Card -->
    <div class="card-wrapper">
      <div class="login-card">
        <!-- Logo Section -->
        <div class="logo-section">
          <router-link to="/">
            <div class="logo-icon">
              <span class="logo-text">T</span>
            </div>
          </router-link>
          <h1 class="logo-title">
            Top<span class="title-highlight">Shares</span><span class="title-sub">Pro</span>
          </h1>
          <p class="logo-subtitle">Trade Smart. Trade TopShares.</p>
        </div>

        <!-- Welcome Text -->
        <div class="welcome-section">
          <h2 class="welcome-heading">Create New Account</h2>
          <p class="welcome-text">Join TopShares Pro to start trading</p>
        </div>

        <!-- Signup Form -->
        <form @submit.prevent="createUser" class="form-content">
          <!-- First Name and Last Name -->
          <div class="input-group-row">
            <div class="input-group">
              <div class="input-icon-wrapper">
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                  type="text"
                  v-model="model.firstName"
                  placeholder="First Name"
                  required
                  class="form-input"
              />
            </div>
            <div class="input-group">
              <div class="input-icon-wrapper">
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                  type="text"
                  v-model="model.lastName"
                  placeholder="Last Name"
                  required
                  class="form-input"
              />
            </div>
          </div>

          <!-- Email and Phone Number -->
          <div class="input-group-row">
            <div class="input-group">
              <div class="input-icon-wrapper">
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                  type="email"
                  v-model="model.email"
                  placeholder="Email address"
                  required
                  class="form-input"
              />
            </div>
            <div class="input-group">
              <div class="input-icon-wrapper">
                <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <input
                  type="text"
                  v-model="model.phoneNumber"
                  placeholder="Phone Number"
                  required
                  class="form-input"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1.9-2 2-2m-2 6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4m2 0c0 2.2-1.8 4-4 4s-4-1.8-4-4m4 4v3"/>
              </svg>
            </div>
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="model.password"
                placeholder="Password"
                required
                class="form-input password-input"
            />
            <button
                type="button"
                @click="toggleShow"
                class="password-toggle"
            >
              <svg v-if="showPassword" class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
              <svg v-else class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
          </div>

          <!-- Confirm Password -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1.9-2 2-2m-2 6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4m2 0c0 2.2-1.8 4-4 4s-4-1.8-4-4m4 4v3"/>
              </svg>
            </div>
            <input
                :type="showPassword ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="Confirm Password"
                required
                class="form-input password-input"
            />
            <button
                type="button"
                @click="toggleShow"
                class="password-toggle"
            >
              <svg v-if="showPassword" class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
              <svg v-else class="toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
          </div>

          <!-- Country -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <select
                v-model="model.country"
                required
                class="form-input"
            >
              <option :value="null" disabled>Choose Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="France Metropolitan">France Metropolitan</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao, People's Democratic Republic">Lao, People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="St. Helena">St. Helena</option>
              <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan, Province of China">Taiwan, Province of China</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (British)">Virgin Islands (British)</option>
              <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
              <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Yugoslavia">Yugoslavia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <!-- Address -->
          <div class="input-group">
            <div class="input-icon-wrapper">
              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <input
                type="text"
                v-model="model.address"
                placeholder="Address"
                required
                class="form-input"
            />
          </div>

          <!-- ID Uploads -->
<!--          <div class="input-group">-->
<!--            <div class="input-icon-wrapper">-->
<!--              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <input-->
<!--                type="file"-->
<!--                id="front-id"-->
<!--                @change="uploadFile"-->
<!--                accept="image/*"-->
<!--                ref="file"-->
<!--                required-->
<!--                class="form-input"-->
<!--            />-->
<!--            <label for="front-id" class="input-label">Front of ID Card (Required)</label>-->
<!--          </div>-->
<!--          <div class="input-group">-->
<!--            <div class="input-icon-wrapper">-->
<!--              <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <input-->
<!--                type="file"-->
<!--                id="back-id"-->
<!--                @change="uploadFile2"-->
<!--                accept="image/*"-->
<!--                ref="file2"-->
<!--                required-->
<!--                class="form-input"-->
<!--            />-->
<!--            <label for="back-id" class="input-label">Back of ID Card (Required)</label>-->
<!--          </div>-->

          <!-- Terms Checkbox -->
          <div class="form-options">
            <label class="checkbox-label">
              <input
                  type="checkbox"
                  v-model="termsAccepted"
                  required
                  class="checkbox-input"
              />
              <span class="checkbox-text">
                I Agree to TopShares Pro
                <button type="button" @click="showDialog" class="terms-link">Terms and Conditions</button>
              </span>
            </label>
          </div>

          <!-- Create Account Button -->
          <base-button
              :loading="loading || loading2"
              style="background: #007aff; border: 1px solid #007aff; color: white;"
              class="signin-button"
          >
            Create Account
          </base-button>

          <!-- Divider -->
          <div class="divider">
            <div class="divider-line"></div>
            <span class="divider-text">OR</span>
          </div>

          <!-- Login Link -->
          <div class="signup-section">
            <p class="signup-text">
              Already have an account?
              <button
                  type="button"
                  @click="onPostClick"
                  class="signup-link"
              >
                Login here
              </button>
            </p>
          </div>
        </form>

        <!-- Security Badge -->
        <div class="security-badge">
          <div class="badge-content">
            <div class="badge-dot"></div>
            <span class="badge-text">Secure Connection</span>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="floating-top"></div>
      <div class="floating-bottom"></div>
    </div>

    <!-- Terms Modal -->
    <terms-base-modal @close="hideDialog" v-if="dialogIsVisible"/>
  </div>
</template>

<script>
import TermsBaseModal from "@/components/BaseComponents/modal/TermsBaseModal.vue";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import S3Request from "@/model/request/S3Request";
import { mapState } from "vuex";
import StoreUtils from "@/utility/StoreUtils";

export default {
  name: 'RegisterForm',
  components: { BaseButton, TermsBaseModal },
  data() {
    return {
      model: new AuthenticationRequest().createUser,
      confirmPassword: '',
      termsAccepted: false,
      dialogIsVisible: false,
      showPassword: false,
      base64: '',
      uploadmodel: S3Request.prototype.uploadBase64(),
      url: '',
      base642: '',
      uploadmodel2: S3Request.prototype.uploadBase64(),
      url2: '',
      randomString: '',
      randomString2: ''
    };
  },
  computed: {
    ...mapState(['sbucket']),
    ...mapState({
      loading: state => state.auth.loading,
      loading2: state => state.sbucket.s3bucketLoading,
      auth: state => state.auth
    })
  },
  methods: {
    onPostClick() {
      this.$router.push('/login');
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async createUser() {
      if (this.model.password !== this.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
      try {
        await StoreUtils.commit(StoreUtils.mutations.auth.updateSignUpFormData, {
          email: this.model.email
        });
        await StoreUtils.dispatch(StoreUtils.actions.auth.createUser, {
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          email: this.model.email,
          password: this.model.password,
          referralCode: this.randomString,
          frontId: "",
          backId: "",
          totalDepositedAmount: 0.00,
          phoneNumber: this.model.phoneNumber,
          totalWithdrawals: 0.00,
          btcBalance: 0.00,
          profit: 0.00,
          loss: 0.00,
          depositMethod: 'bitcoin',
          displayPicture: '',
          walletAddress: '',
          walletName: '',
          twoFactorAuthenticationCode: this.randomString2,
          userStatus: 'unVerified',
          role: 'Customer',
          country: this.model.country,
          address: this.model.address
        });
        // Uncomment to enable navigation after successful signup
        // await this.$router.push('/email-auth');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
    generateRandomString() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString = result;
    },
    generateRandomString2() {
      const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      this.randomString2 = result;
    },
    uploadFile() {
      let input = this.$refs.file;
      let files = input.files;
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit('input', files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage() {
      this.uploadmodel.username = `${
          this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
      }_${Date.now()}`;
      this.uploadmodel.base64 = this.base64;
      await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
      this.url = this.sbucket.s3bucketResponse.url;
    },
    uploadFile2() {
      let input = this.$refs.file2;
      let files = input.files;
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base642 = e.target.result;
          this.uploadOfficerImage2();
        };
        reader.readAsDataURL(files[0]);
        this.$emit('input', files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage2() {
      this.uploadmodel2.username = `${
          this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
      }_${Date.now()}`;
      this.uploadmodel2.base64 = this.base642;
      await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel2, { root: true });
      this.url2 = this.sbucket.s3bucketResponse.url;
    }
  },
  created() {
    this.generateRandomString();
    this.generateRandomString2();
  },
  mounted() {
    this.generateRandomString();
    this.generateRandomString2();
  }
}
</script>

<style scoped>
/* Base styles */
.login-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0F172A, #1E3A8A, #0F172A);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
}

/* Background patterns */
.background-pattern {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120,119,198,0.1), transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 50%);
}

.background-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(45deg, transparent 25%, rgba(68,68,68,0.05) 50%, transparent 75%, transparent);
}

/* Card wrapper */
.card-wrapper {
  position: relative;
  width: 100%;
  max-width: 35rem;
}

/* Login card */
.login-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Logo section */
.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to right, #3B82F6, #2563EB);
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.logo-text {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.title-highlight {
  color: #60A5FA;
}

.title-sub {
  color: #CBD5E1;
}

.logo-subtitle {
  color: #CBD5E1;
  font-size: 0.875rem;
}

/* Welcome section */
.welcome-section {
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.welcome-text {
  color: #94A3B8;
  font-size: 0.875rem;
}

/* Form content */
.form-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Input group row */
.input-group-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.input-group-row .input-group {
  flex: 1;
  min-width: 0;
}

/* Input group */
.input-group {
  position: relative;
}

.input-icon-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.input-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #94A3B8;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
}

.form-input::placeholder {
  color: #94A3B8;
}

.form-input:focus {
  outline: none;
  border-color: #60A5FA;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
}

.form-input[type="file"] {
  padding: 0.75rem 1rem;
}

.input-label {
  position: absolute;
  top: -0.5rem;
  left: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: #94A3B8;
  font-size: 0.75rem;
  padding: 0 0.25rem;
}

.password-input {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  color: #94A3B8;
  background: none;
  border: none;
}

.password-toggle:hover {
  color: #ffffff;
}

.toggle-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Form options */
.form-options {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.checkbox-input {
  width: 1rem;
  height: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  color: #3B82F6;
}

.checkbox-input:focus {
  box-shadow: 0 0 0 2px #3B82F6;
}

.checkbox-text {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #CBD5E1;
}

.terms-link {
  color: #60A5FA;
  font-weight: 500;
  background: none;
  border: none;
  text-decoration: underline;
}

.terms-link:hover {
  color: #93C5FD;
}

/* Sign-in button */
.signin-button {
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}

.signin-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.button-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

.signin-button:hover .button-icon {
  transform: translateX(0.25rem);
}

/* Divider */
.divider {
  position: relative;
  margin: 1.5rem 0;
}

.divider-line {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.divider-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  background: transparent;
  color: #94A3B8;
  font-size: 0.875rem;
}

/* Sign-up section */
.signup-section {
  text-align: center;
}

.signup-text {
  font-size: 0.875rem;
  color: #94A3B8;
}

.signup-link {
  color: #60A5FA;
  font-weight: 500;
  background: none;
  border: none;
}

.signup-link:hover {
  color: #93C5FD;
}

/* Security badge */
.security-badge {
  margin-top: 2rem;
  text-align: center;
}

.badge-content {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
}

.badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #34D399;
  border-radius: 9999px;
  margin-right: 0.5rem;
}

.badge-text {
  color: #6EE7B7;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Floating elements */
.floating-top {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 6rem;
  height: 6rem;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 9999px;
  filter: blur(24px);
}

.floating-bottom {
  position: absolute;
  bottom: -1.5rem;
  left: -1.5rem;
  width: 8rem;
  height: 8rem;
  background: rgba(147, 51, 234, 0.2);
  border-radius: 9999px;
  filter: blur(24px);
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .input-group-row {
    flex-direction: column;
  }
}
</style>