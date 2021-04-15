import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_3} />
      <View style={styles.View_1_4}>
        <Text style={styles.Text_1_4}>Abhishek Vatsa</Text>
      </View>
      <View style={styles.View_1_14}>
        <Text style={styles.Text_1_14}>Download Resume</Text>
      </View>
      <View style={styles.View_1_15} />
      <View style={styles.View_6_2} />
      <View style={styles.View_6_120} />
      <View style={styles.View_1_17}>
        <Text style={styles.Text_1_17}>Jack Of All Trades</Text>
      </View>
      <View style={styles.View_1_19}>
        <Text style={styles.Text_1_19}>Delivering more than expected</Text>
      </View>
      <View style={styles.View_21_2}>
        <View style={styles.View_1_20} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb85/509c/7b1b2ac36da3feed84b95cf74e22c1f3"
          }}
          style={styles.ImageBackground_1_21}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a89/4c60/33be5af39bce7958d756fabcbc2bf9dc"
        }}
        style={styles.ImageBackground_2_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a89/4c60/33be5af39bce7958d756fabcbc2bf9dc"
        }}
        style={styles.ImageBackground_36_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783e/a74f/03bcb81480f05b79e4cb5dc6c0882a2c"
        }}
        style={styles.ImageBackground_53_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d72/01e6/cc3b25ef196ff3db478e0446f08a5f7a"
        }}
        style={styles.ImageBackground_53_0}
      />
      <View style={styles.View_1_41}>
        <Text style={styles.Text_1_41}>INDUSTRIAL PROJECT</Text>
      </View>
      <View style={styles.View_6_12}>
        <Text style={styles.Text_6_12}>CERTIFICATION AND DEGREES</Text>
      </View>
      <View style={styles.View_2_7}>
        <Text style={styles.Text_2_7}>FoodDino</Text>
      </View>
      <View style={styles.View_6_7}>
        <Text style={styles.Text_6_7}>My Education</Text>
      </View>
      <View style={styles.View_2_10}>
        <Text style={styles.Text_2_10}>Understanding the FoodTech Market</Text>
      </View>
      <View style={styles.View_2_16}>
        <Text style={styles.Text_2_16}>User Research</Text>
      </View>
      <View style={styles.View_2_18}>
        <Text style={styles.Text_2_18}>Business Model Canvas</Text>
      </View>
      <View style={styles.View_2_20}>
        <Text style={styles.Text_2_20}>Product Artifacts</Text>
      </View>
      <View style={styles.View_2_21}>
        <Text style={styles.Text_2_21}>MVP Creation</Text>
      </View>
      <View style={styles.View_2_22}>
        <Text style={styles.Text_2_22}>Sketching</Text>
      </View>
      <View style={styles.View_2_24}>
        <Text style={styles.Text_2_24}>Wireframing</Text>
      </View>
      <View style={styles.View_2_26}>
        <Text style={styles.Text_2_26}>Product Analytics</Text>
      </View>
      <View style={styles.View_2_27}>
        <Text style={styles.Text_2_27}>Growth Strategies</Text>
      </View>
      <View style={styles.View_2_28}>
        <Text style={styles.Text_2_28}>Product Roadmap</Text>
      </View>
      <View style={styles.View_2_29}>
        <Text style={styles.Text_2_29}>
          Product Backlog &amp; Sprint Backlog
        </Text>
      </View>
      <View style={styles.View_2_30}>
        <Text style={styles.Text_2_30}>
          Product Requirements Document (PRD)
        </Text>
      </View>
      <View style={styles.View_2_36}>
        <Text style={styles.Text_2_36}>Go To Market Strategy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_2_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d1/57d8/1e147718ce5ab613dd15f36aebf59021"
        }}
        style={styles.ImageBackground_2_9}
      />
      <View style={styles.View_58_0}>
        <View style={styles.View_6_22} />
        <View style={styles.View_6_14}>
          <Text style={styles.Text_6_14}>
            BTECH IN MECHANICAL ENGINEERING FROM SRM UNIVERSITY, CHENNAI 2015-20
          </Text>
        </View>
      </View>
      <View style={styles.View_6_24}>
        <View style={styles.View_6_16} />
        <View style={styles.View_6_19}>
          <Text style={styles.Text_6_19}>
            CERTIFICATION IN DESIGN FOR QUALITY, MANUFACTURING AND ASSEMBLY FROM
            IIT MADRAS
          </Text>
        </View>
      </View>
      <View style={styles.View_6_23}>
        <View style={styles.View_6_20} />
        <View style={styles.View_6_21}>
          <Text style={styles.Text_6_21}>
            CERTIFICATION IN PRODUCT MANAGEMENT FROM DUKE CE
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd44/cac1/a857b4773bc5fa5e4b1d0bda97f53994"
        }}
        style={styles.ImageBackground_36_4}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 0, 255, 1)"
  },
  View_1_4: {
    width: wp("11.875%"),
    minWidth: wp("11.875%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.729166666666666%"),
    top: hp("5.191256830601093%")
  },
  Text_1_4: {
    color: "rgba(255, 200, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14: {
    width: wp("12.239583333333332%"),
    minWidth: wp("12.239583333333332%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.760416666666664%"),
    top: hp("5.601092896174864%")
  },
  Text_1_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("106.83060109289617%"),
    minHeight: hp("106.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.256830601092894%"),
    backgroundColor: "rgba(134, 43, 255, 1)"
  },
  View_6_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114.34426229508196%"),
    minHeight: hp("114.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("237.0218579234973%"),
    backgroundColor: "rgba(252, 41, 167, 1)"
  },
  View_6_120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114.34426229508196%"),
    minHeight: hp("114.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("123.08743169398907%"),
    backgroundColor: "rgba(230, 210, 26, 1)"
  },
  View_1_17: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.729166666666666%"),
    top: hp("31.147540983606557%")
  },
  Text_1_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.2,
    textTransform: "none"
  },
  View_1_19: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.25%"),
    top: hp("43.85245901639344%")
  },
  Text_1_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.800000000000001,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("8.59375%"),
    minWidth: wp("8.59375%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.291666666666668%"),
    top: hp("78.82513661202186%")
  },
  View_1_20: {
    width: wp("8.59375%"),
    minWidth: wp("8.59375%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_1_21: {
    width: wp("2.272228797276815%"),
    minWidth: wp("2.272228797276815%"),
    height: hp("5.730360583529446%"),
    minHeight: hp("5.730360583529446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5228780110677071%"),
    top: hp("2.804215227971298%")
  },
  ImageBackground_2_1: {
    width: wp("25.703125%"),
    minWidth: wp("25.703125%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.135416666666664%"),
    top: hp("112.56830601092895%")
  },
  ImageBackground_36_21: {
    width: wp("25.703125%"),
    minWidth: wp("25.703125%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.135416666666664%"),
    top: hp("228.27868852459017%")
  },
  ImageBackground_53_1: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("41.53005464480874%"),
    minHeight: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.77083333333333%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_53_0: {
    width: wp("15.833336512247723%"),
    minWidth: wp("15.833336512247723%"),
    height: hp("43.5792349726776%"),
    minHeight: hp("43.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("54.23497267759563%")
  },
  View_1_41: {
    width: wp("15.937499999999998%"),
    minWidth: wp("15.937499999999998%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%"),
    top: hp("129.78142076502732%")
  },
  Text_1_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.84,
    textTransform: "none"
  },
  View_6_12: {
    width: wp("23.489583333333332%"),
    minWidth: wp("23.489583333333332%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%"),
    top: hp("250.95628415300547%")
  },
  Text_6_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.800000000000001,
    textTransform: "none"
  },
  View_2_7: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("134.69945355191257%")
  },
  Text_2_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_7: {
    width: wp("23.177083333333336%"),
    minWidth: wp("23.177083333333336%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.041666666666668%"),
    top: hp("254.50819672131146%")
  },
  Text_6_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_10: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("151.9125683060109%")
  },
  Text_2_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_16: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("157.92349726775956%")
  },
  Text_2_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_18: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("163.9344262295082%")
  },
  Text_2_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_20: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("169.94535519125685%")
  },
  Text_2_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_21: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("175.95628415300547%")
  },
  Text_2_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_22: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("181.9672131147541%")
  },
  Text_2_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_24: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("187.97814207650273%")
  },
  Text_2_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_26: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("193.98907103825135%")
  },
  Text_2_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_27: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("200%")
  },
  Text_2_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_28: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("206.01092896174862%")
  },
  Text_2_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_29: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("212.0218579234973%")
  },
  Text_2_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_30: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("218.0327868852459%")
  },
  Text_2_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_36: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("224.04371584699453%")
  },
  Text_2_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_11: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("154.5081967213115%")
  },
  ImageBackground_2_12: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("160.5191256830601%")
  },
  ImageBackground_2_15: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("166.53005464480876%")
  },
  ImageBackground_2_17: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("172.54098360655738%")
  },
  ImageBackground_2_19: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("178.551912568306%")
  },
  ImageBackground_2_23: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("184.56284153005464%")
  },
  ImageBackground_2_25: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("190.5737704918033%")
  },
  ImageBackground_2_31: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("196.5846994535519%")
  },
  ImageBackground_2_32: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("202.59562841530055%")
  },
  ImageBackground_2_33: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("208.60655737704917%")
  },
  ImageBackground_2_34: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("214.61748633879782%")
  },
  ImageBackground_2_35: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("220.62841530054644%")
  },
  ImageBackground_2_37: {
    width: wp("0.5208333333333333%"),
    minWidth: wp("0.5208333333333333%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("226.63934426229505%")
  },
  ImageBackground_2_9: {
    width: wp("18.75%"),
    height: hp("107.63827464619622%"),
    top: hp("127.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.73958333333333%")
  },
  View_58_0: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("272.26775956284155%")
  },
  View_6_22: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_6_14: {
    width: wp("12.239583333333332%"),
    minWidth: wp("12.239583333333332%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1458333333333304%"),
    top: hp("3.825136612021822%")
  },
  Text_6_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_24: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.46875%"),
    top: hp("272.26775956284155%")
  },
  View_6_16: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_6_19: {
    width: wp("15.885416666666666%"),
    minWidth: wp("15.885416666666666%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7291666666666643%"),
    top: hp("2.8688524590163524%")
  },
  Text_6_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_23: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.36458333333334%"),
    top: hp("272.26775956284155%")
  },
  View_6_20: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_6_21: {
    width: wp("15.885416666666666%"),
    minWidth: wp("15.885416666666666%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666572%"),
    top: hp("2.8688524590163524%")
  },
  Text_6_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_36_4: {
    width: wp("3.229166666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.15625%")
  },
  View_2: { height: 2572 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
