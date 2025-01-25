import * as React from "react";
import { SVGProps } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
});


const AngelDayText = ({ text, ...props } : { text: string } & SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 460 163"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    overflow={"visible"}
    className={`${props.className} w-10/12 group transition-transform duration-300 ease-in-out group-hover:-translate-y-8 pr-6`}
  >
    <g id="Frame 12">
      <g id="Group 31">
        <g id="Rectangle 51" filter="url(#filter0_d_2004_432)" className="transform duration-300 ease-in-out group-hover:-translate-y-8">
          <rect
            x={77.678}
            y={41.9272}
            width={325.746}
            height={81.0189}
            rx={40.5094}
            fill="#868686"
            fillOpacity={0.3}
            shapeRendering="crispEdges"
          />
          <rect
            x={79.178}
            y={43.4272}
            width={322.746}
            height={78.0189}
            rx={39.0094}
            stroke="url(#paint0_linear_2004_432)"
            strokeWidth={5}
            shapeRendering="crispEdges"
          />
        </g>
        <text
          x="53%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#FFDE7D"
          className={`${cinzel.className} text-6xl transition-transform duration-300 ease-in-out group-hover:-translate-y-8`}
        >
          {text}
        </text>
        <g id="Group 2" className="transform duration-300 ease-in-out group-hover:translate-y-12 group-hover:-translate-x-2 group-hover:-rotate-12">
          <path
            id="Vector 2"
            d="M445.549 37.565C442.754 39.6423 437.407 42.8472 434.931 44.1183L404.031 63.4422C403.752 63.6106 400.481 65.9761 400.664 66.8034C400.847 67.6308 412.341 60.6508 413.692 59.8095C423.456 55.1176 439.272 48.4145 444.063 44.945C451.076 39.8677 449.151 40.9717 451.106 38.7763C452.67 37.02 454.748 33.5859 455.592 32.0883L455.66 31.9027C456.649 29.2169 458.673 23.7195 457.595 24.5939C457.523 24.8811 449.974 34.276 445.549 37.565Z"
            fill="#BF750E"
            stroke="#C1750F"
            strokeWidth={2}
          />
          <g id="Vector 3" className="">
            <path
              d="M403.757 72.9836L411.746 68.6396L420.05 64.4968L426.4 61.3289L431.6 59.0933C435.1 57.9094 436.628 57.6132 440.823 55.4253C444.038 53.7485 446.448 51.6554 447.376 50.7209C448.928 49.157 451.645 46.115 452.421 45.9434L452.074 48.0541C451.565 49.4322 450.243 52.5271 449.024 53.8817C447.501 55.5749 445.086 58.1432 443.261 59.0894C441.437 60.0355 438.918 61.5937 435.776 62.6441C433.377 63.4461 429.087 64.8927 427.344 65.5948C420.463 68.2022 406.208 72.9572 404.906 73.2719C404.685 73.3252 404.369 73.4241 404.132 73.4735C403.957 73.5214 403.859 73.5421 403.872 73.5007C403.213 73.4081 403.656 73.0061 403.757 72.9836Z"
              fill="#BF750E"
            />
            <path
              d="M404.906 73.2719C406.208 72.9572 420.463 68.2022 427.344 65.5948C429.087 64.8927 433.377 63.4461 435.776 62.6441C438.918 61.5937 441.437 60.0355 443.261 59.0894C445.086 58.1432 447.501 55.5749 449.024 53.8817C450.243 52.5271 451.565 49.4322 452.074 48.0541L452.421 45.9434C451.645 46.115 448.928 49.157 447.376 50.7209C446.448 51.6554 444.038 53.7485 440.823 55.4253C436.628 57.6132 435.1 57.9094 431.6 59.0933L426.4 61.3289L420.05 64.4968L411.746 68.6396L403.757 72.9836C403.656 73.0061 403.213 73.4081 403.872 73.5007M404.906 73.2719C404.583 73.35 404.053 73.5261 403.872 73.5007M404.906 73.2719C404.285 73.4092 403.845 73.5856 403.872 73.5007"
              stroke="#C1750F"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 4"
            d="M427.856 70.3628C423.93 71.8192 413.787 75.293 404.629 77.5366C408.885 77.3633 417.861 76.9137 419.723 76.5018C422.05 75.9869 433.641 73.8288 436.528 72.7831C439.415 71.7374 440.91 71.1356 442.706 70.0602C444.502 68.9847 445.867 67.1909 447.32 64.5642C448.773 61.9376 447.839 62.0085 447.638 62.3243C447.477 62.5769 445.118 64.4187 443.959 65.308C442.297 66.1729 436.75 68.3948 427.856 70.3628Z"
            fill="#BF750E"
            stroke="#C1750F"
            strokeWidth={2}
          />
          <g id="Vector 5">
            <path
              d="M425.45 79.7094C419.088 79.7612 421.256 80.3663 403.719 83.8401C412.043 84.0774 429.544 84.363 432.957 83.6079C437.223 82.6639 436.548 82.6777 439.235 80.727C440.529 79.2203 440.529 79.2203 442.096 77.1108C443.663 75.0012 441.982 76.5937 439.252 77.7401C436.523 78.8865 431.812 79.6577 425.45 79.7094Z"
              fill="#BF750E"
            />
            <path
              d="M416.94 89.0505C415.59 89.078 406.662 90.1949 402.176 90.9616C408.493 92.14 421.705 94.776 424.302 94.7439C427.547 94.7037 427.871 95.0389 433.33 92.7461C434.299 92.1248 435.752 90.5829 435.932 89.1871C436.04 88.3496 433.841 90.0565 431.385 90.6C430.334 90.8327 425.799 90.4801 423.947 90.0764C420.813 89.3931 417.719 89.0346 416.94 89.0505Z"
              fill="#BF750E"
            />
            <path
              d="M425.45 79.7094C419.088 79.7612 421.256 80.3663 403.719 83.8401C412.043 84.0774 429.544 84.363 432.957 83.6079C437.223 82.6639 436.548 82.6777 439.235 80.727C440.529 79.2203 440.529 79.2203 442.096 77.1108C443.663 75.0012 441.982 76.5937 439.252 77.7401C436.523 78.8865 431.812 79.6577 425.45 79.7094Z"
              stroke="#C1750F"
              strokeWidth={2}
            />
            <path
              d="M416.94 89.0505C415.59 89.078 406.662 90.1949 402.176 90.9616C408.493 92.14 421.705 94.776 424.302 94.7439C427.547 94.7037 427.871 95.0389 433.33 92.7461C434.299 92.1248 435.752 90.5829 435.932 89.1871C436.04 88.3496 433.841 90.0565 431.385 90.6C430.334 90.8327 425.799 90.4801 423.947 90.0764C420.813 89.3931 417.719 89.0346 416.94 89.0505Z"
              stroke="#C1750F"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 6"
            d="M404.425 96.8371L399.887 97.1633C404.117 99.1202 413.297 103.227 415.146 104.228C417.457 105.479 420.139 105.641 421.147 105.612C422.629 105.569 432.795 100.915 425.918 101.437C420.317 101.863 421.981 102.027 417.849 100.511C413.717 98.9955 411.963 98.4235 409.422 97.3586C407.389 96.5066 405.167 96.7181 404.425 96.8371Z"
            fill="#BF750E"
            stroke="#C1750F"
            strokeWidth={2}
          />
          <g id="Vector 7">
            <path
              d="M407.518 107.136C406.227 106.202 403.081 103.996 400.83 102.65C398.734 101.396 396.999 101.255 396.337 101.339C396.293 101.346 396.292 101.66 397.01 102.546C397.756 103.466 400.168 104.559 400.914 105.479L403.769 107.966C404.664 108.943 406.756 111.292 407.973 112.867C409.189 114.442 411.388 115.23 412.336 115.427C413.523 115.48 416.277 115.097 417.507 114.283C419.044 113.264 419.303 113.207 419.16 112.561C418.471 111.9 416.403 112.357 415.182 112.356C414.223 112.355 411.914 110.864 410.847 109.925L407.518 107.136Z"
              fill="#BF750E"
            />
            <path
              d="M399.029 109.829C396.366 106.621 393.968 105.75 393.102 105.716L393.245 106.362C394.755 108.288 397.046 110.674 397.534 111.651C398.248 113.083 399.569 115.947 401.175 118.303C402.46 120.188 404.801 120.8 405.955 120.907C407.956 120.554 411.453 119.771 409.431 119.459C406.904 119.069 405.599 117.46 402.701 114.169C399.803 110.878 402.357 113.838 399.029 109.829Z"
              fill="#BF750E"
            />
            <path
              d="M396.337 101.339C396.375 101.331 396.288 101.345 396.337 101.339ZM396.337 101.339C396.999 101.255 398.734 101.396 400.83 102.65C403.081 103.996 406.227 106.202 407.518 107.136L410.847 109.925C411.914 110.864 414.223 112.355 415.182 112.356C416.403 112.357 418.471 111.9 419.16 112.561C419.303 113.207 419.044 113.264 417.507 114.283C416.277 115.097 413.523 115.48 412.336 115.427C411.388 115.23 409.189 114.442 407.973 112.867C406.756 111.292 404.664 108.943 403.769 107.966L400.914 105.479C400.168 104.559 397.756 103.466 397.01 102.546C396.292 101.66 396.293 101.346 396.337 101.339ZM393.102 105.716C393.968 105.75 396.366 106.621 399.029 109.829C402.357 113.838 399.803 110.878 402.701 114.169C405.599 117.46 406.904 119.069 409.431 119.459C411.453 119.771 407.956 120.554 405.955 120.907C404.801 120.8 402.46 120.188 401.175 118.303C399.569 115.947 398.248 113.083 397.534 111.651C397.046 110.674 394.755 108.288 393.245 106.362L393.102 105.716Z"
              stroke="#C1750F"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 8"
            d="M416.609 42.2065C397.671 54.6688 396.661 59.9094 395.497 61.3875C401.216 56.5962 433.155 39.7656 440.715 32.2619C448.276 24.7581 453.351 17.6686 455.149 14.1519C456.948 10.6352 457.108 8.29455 457.842 6.09805C458.43 4.34085 458.329 1.96745 458.206 1.0004C457.955 2.72822 455.876 8.24175 449.561 16.4733C441.668 26.7627 435.548 29.7442 416.609 42.2065Z"
            fill="#BF750E"
            stroke="#C1750F"
            strokeWidth={2}
          />
        </g>
        <g id="Group 3" className="transform duration-300 ease-in-out group-hover:-translate-y-12 group-hover:translate-x-4 group-hover:rotate-12">
          <path
            id="Vector 2_2"
            d="M35.5194 37.5646C38.3141 39.6418 43.6618 42.8467 46.1377 44.1178L77.0377 63.4417C77.3168 63.6101 80.5881 65.9756 80.405 66.803C80.2219 67.6303 68.7276 60.6503 67.3769 59.809C57.6124 55.1171 41.797 48.414 37.0052 44.9445C29.9927 39.8672 31.918 40.9712 29.963 38.7758C28.399 37.0195 26.3203 33.5854 25.4765 32.0878L25.4082 31.9022C24.4194 29.2164 22.3955 23.719 23.4737 24.5934C23.5457 24.8806 31.0944 34.2755 35.5194 37.5646Z"
            fill="#BD760D"
            stroke="#B8760A"
            strokeWidth={2}
          />
          <g id="Vector 3_2">
            <path
              d="M77.3113 72.9834L69.3229 68.6393L61.0189 64.4966L54.6687 61.3286L49.4682 59.093C45.9685 57.9092 44.4404 57.613 40.2454 55.425C37.0306 53.7483 34.6204 51.6552 33.6928 50.7207C32.1405 49.1568 29.4236 46.1148 28.648 45.9431L28.9946 48.0538C29.5032 49.432 30.8252 52.5269 32.0442 53.8814C33.5679 55.5746 35.9828 58.143 37.8074 59.0891C39.6321 60.0353 42.1508 61.5935 45.2925 62.6438C47.6914 63.4459 51.9817 64.8924 53.7247 65.5945C60.6057 68.202 74.8604 72.9569 76.1627 73.2716C76.3832 73.3249 76.6999 73.4238 76.9364 73.4732C77.1119 73.5212 77.2097 73.5419 77.1969 73.5005C77.8557 73.4079 77.4127 73.0058 77.3113 72.9834Z"
              fill="#BD760D"
            />
            <path
              d="M76.1627 73.2716C74.8604 72.9569 60.6057 68.202 53.7247 65.5945C51.9817 64.8924 47.6914 63.4459 45.2924 62.6438C42.1508 61.5935 39.6321 60.0353 37.8074 59.0891C35.9828 58.143 33.5679 55.5746 32.0442 53.8814C30.8252 52.5269 29.5032 49.432 28.9946 48.0538L28.648 45.9431C29.4236 46.1148 32.1405 49.1568 33.6928 50.7207C34.6204 51.6552 37.0305 53.7483 40.2454 55.425C44.4404 57.613 45.9685 57.9092 49.4682 59.093L54.6687 61.3286L61.0189 64.4966L69.3229 68.6393L77.3113 72.9834C77.4127 73.0058 77.8557 73.4079 77.1969 73.5005M76.1627 73.2716C76.486 73.3498 77.0161 73.5259 77.1969 73.5005M76.1627 73.2716C76.7832 73.4089 77.2233 73.5854 77.1969 73.5005"
              stroke="#B8760A"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 4_2"
            d="M53.2114 70.3625C57.1379 71.819 67.2805 75.2928 76.4387 77.5363C72.1831 77.363 63.2064 76.9134 61.3449 76.5015C59.0181 75.9866 47.4272 73.8286 44.5398 72.7829C41.6524 71.7371 40.1584 71.1353 38.3623 70.0599C36.5663 68.9845 35.2005 67.1907 33.7477 64.564C32.2949 61.9373 33.2284 62.0083 33.4298 62.324C33.5908 62.5766 35.9495 64.4184 37.1087 65.3077C38.7705 66.1726 44.3176 68.3945 53.2114 70.3625Z"
            fill="#BD760D"
            stroke="#B8760A"
            strokeWidth={2}
          />
          <g id="Vector 5_2">
            <path
              d="M55.6187 79.7092C61.9805 79.7609 59.8126 80.366 77.3499 83.8399C69.0258 84.0771 51.5244 84.3628 48.1117 83.6076C43.8458 82.6637 44.5207 82.6774 41.8336 80.7268C40.5398 79.2201 40.5398 79.2201 38.9726 77.1105C37.4054 75.0009 39.087 76.5934 41.8165 77.7398C44.5461 78.8862 49.257 79.6575 55.6187 79.7092Z"
              fill="#BD760D"
            />
            <path
              d="M64.1285 89.0502C65.4784 89.0778 74.4069 90.1947 78.8928 90.9613C72.5753 92.1398 59.3631 94.7757 56.7667 94.7436C53.5212 94.7034 53.1978 95.0387 47.7388 92.7459C46.7694 92.1246 45.3162 90.5827 45.1363 89.1868C45.0284 88.3494 47.2271 90.0563 49.6833 90.5998C50.7347 90.8324 55.2694 90.4799 57.1215 90.0761C60.2559 89.3928 63.3491 89.0344 64.1285 89.0502Z"
              fill="#BD760D"
            />
            <path
              d="M55.6187 79.7092C61.9805 79.7609 59.8126 80.366 77.3499 83.8399C69.0258 84.0771 51.5244 84.3628 48.1117 83.6076C43.8458 82.6637 44.5207 82.6774 41.8336 80.7268C40.5398 79.2201 40.5398 79.2201 38.9726 77.1105C37.4054 75.0009 39.087 76.5934 41.8165 77.7398C44.5461 78.8862 49.257 79.6575 55.6187 79.7092Z"
              stroke="#B8760A"
              strokeWidth={2}
            />
            <path
              d="M64.1285 89.0502C65.4784 89.0778 74.4069 90.1947 78.8928 90.9613C72.5753 92.1398 59.3631 94.7757 56.7667 94.7436C53.5212 94.7034 53.1978 95.0387 47.7388 92.7459C46.7694 92.1246 45.3162 90.5827 45.1363 89.1868C45.0284 88.3494 47.2271 90.0563 49.6833 90.5998C50.7347 90.8324 55.2694 90.4799 57.1215 90.0761C60.2559 89.3928 63.3491 89.0344 64.1285 89.0502Z"
              stroke="#B8760A"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 6_2"
            d="M76.6437 96.8369L81.1819 97.1631C76.9521 99.1199 67.7717 103.227 65.923 104.228C63.6121 105.479 60.9294 105.641 59.9216 105.612C58.4394 105.569 48.2739 100.914 55.1501 101.437C60.7511 101.863 59.0877 102.026 63.2199 100.511C67.3521 98.9953 69.1058 98.4233 71.6467 97.3583C73.6794 96.5064 75.9016 96.7179 76.6437 96.8369Z"
            fill="#BD760D"
            stroke="#B8760A"
            strokeWidth={2}
          />
          <g id="Vector 7_2">
            <path
              d="M73.5504 107.136C74.8421 106.202 77.9879 103.996 80.2384 102.65C82.3348 101.396 84.0694 101.255 84.7321 101.339C84.7756 101.346 84.7768 101.66 84.0582 102.546C83.3123 103.465 80.9007 104.559 80.1548 105.479L77.2993 107.966C76.405 108.943 74.3124 111.291 73.096 112.866C71.8797 114.441 69.6804 115.229 68.7328 115.426C67.5457 115.48 64.7919 115.097 63.5619 114.282C62.0245 113.264 61.7659 113.207 61.9089 112.56C62.5977 111.899 64.666 112.357 65.8866 112.356C66.8457 112.355 69.1547 110.864 70.2213 109.925L73.5504 107.136Z"
              fill="#BD760D"
            />
            <path
              d="M82.0399 109.828C84.7023 106.621 87.1007 105.75 87.9671 105.716L87.8241 106.362C86.3132 108.288 84.0224 110.674 83.535 111.651C82.8209 113.082 81.4997 115.946 79.8934 118.303C78.6084 120.188 76.2672 120.8 75.1137 120.906C73.1125 120.554 69.6155 119.771 71.6372 119.459C74.1643 119.069 75.4696 117.46 78.3675 114.168C81.2654 110.877 78.7119 113.838 82.0399 109.828Z"
              fill="#BD760D"
            />
            <path
              d="M84.7321 101.339C84.6937 101.33 84.7808 101.345 84.7321 101.339ZM84.7321 101.339C84.0694 101.255 82.3348 101.396 80.2384 102.65C77.9879 103.996 74.8421 106.202 73.5504 107.136L70.2213 109.925C69.1547 110.864 66.8457 112.355 65.8866 112.356C64.666 112.357 62.5977 111.899 61.9089 112.56C61.7659 113.207 62.0245 113.264 63.5619 114.282C64.7919 115.097 67.5457 115.48 68.7328 115.426C69.6804 115.229 71.8797 114.441 73.096 112.866C74.3124 111.291 76.405 108.943 77.2993 107.966L80.1548 105.479C80.9007 104.559 83.3123 103.465 84.0582 102.546C84.7768 101.66 84.7756 101.346 84.7321 101.339ZM87.9671 105.716C87.1007 105.75 84.7023 106.621 82.0399 109.828C78.7119 113.838 81.2654 110.877 78.3675 114.168C75.4696 117.46 74.1643 119.069 71.6372 119.459C69.6155 119.771 73.1125 120.554 75.1137 120.906C76.2672 120.8 78.6084 120.188 79.8934 118.303C81.4997 115.946 82.8209 113.082 83.535 111.651C84.0224 110.674 86.3132 108.288 87.8241 106.362L87.9671 105.716Z"
              stroke="#B8760A"
              strokeWidth={2}
            />
          </g>
          <path
            id="Vector 8_2"
            d="M64.4592 42.2062C83.3975 54.6685 84.4075 59.9092 85.572 61.3873C79.8522 56.596 47.9137 39.7654 40.3534 32.2616C32.793 24.7579 27.7174 17.6683 25.9192 14.1516C24.121 10.6349 23.9609 8.29431 23.2266 6.09781C22.6391 4.34061 22.7394 1.96721 22.863 1.00016C23.1134 2.72798 25.193 8.2415 31.5075 16.473C39.4007 26.7624 45.5209 29.7439 64.4592 42.2062Z"
            fill="#BD760D"
            stroke="#B8760A"
            strokeWidth={2}
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_2004_432"
        x={38.278}
        y={2.52724}
        width={404.546}
        height={159.819}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={9}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_2004_432"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={24.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.74902 0 0 0 0 0.458824 0 0 0 0 0.054902 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2004_432"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2004_432"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2004_432"
        x1={73.8306}
        y1={20.9974}
        x2={410.355}
        y2={25.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D77519" />
        <stop offset={1} stopColor="#A27700" />
      </linearGradient>
    </defs>
  </svg>
);
export default AngelDayText;
