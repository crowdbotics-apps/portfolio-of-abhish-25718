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
      <View style={styles.View_6_28} />
      <View style={styles.View_6_29}>
        <Text style={styles.Text_6_29}>Abhishek Vatsa</Text>
      </View>
      <View style={styles.View_6_30}>
        <Text style={styles.Text_6_30}>My Projects</Text>
      </View>
      <View style={styles.View_6_31}>
        <Text style={styles.Text_6_31}>My Skills</Text>
      </View>
      <View style={styles.View_6_32}>
        <Text style={styles.Text_6_32}>Contact Me</Text>
      </View>
      <View style={styles.View_6_33} />
      <View style={styles.View_6_34} />
      <View style={styles.View_6_35}>
        <Text style={styles.Text_6_35}>Jack Of All Trades</Text>
      </View>
      <View style={styles.View_6_36}>
        <Text style={styles.Text_6_36}>Meet Abhishek Vatsa</Text>
      </View>
      <View style={styles.View_6_37} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb85/509c/7b1b2ac36da3feed84b95cf74e22c1f3"
        }}
        style={styles.ImageBackground_6_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a89/4c60/33be5af39bce7958d756fabcbc2bf9dc"
        }}
        style={styles.ImageBackground_6_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e32/447d/8fd8209fdc883bf5cd4f374bdb177c8b"
        }}
        style={styles.ImageBackground_6_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783e/a74f/03bcb81480f05b79e4cb5dc6c0882a2c"
        }}
        style={styles.ImageBackground_6_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d72/01e6/cc3b25ef196ff3db478e0446f08a5f7a"
        }}
        style={styles.ImageBackground_6_59}
      />
      <View style={styles.View_6_63}>
        <Text style={styles.Text_6_63}>FEATURED PROJECT</Text>
      </View>
      <View style={styles.View_6_64}>
        <Text style={styles.Text_6_64}>CERTIFICATION AND DEGREES</Text>
      </View>
      <View style={styles.View_6_65}>
        <Text style={styles.Text_6_65}>FoodDino</Text>
      </View>
      <View style={styles.View_6_66}>
        <Text style={styles.Text_6_66}>My Education</Text>
      </View>
      <View style={styles.View_6_67}>
        <Text style={styles.Text_6_67}>Understanding the FoodTech Market</Text>
      </View>
      <View style={styles.View_6_68}>
        <Text style={styles.Text_6_68}>User Research</Text>
      </View>
      <View style={styles.View_6_69}>
        <Text style={styles.Text_6_69}>Business Model Canvas</Text>
      </View>
      <View style={styles.View_6_70}>
        <Text style={styles.Text_6_70}>Product Artifacts</Text>
      </View>
      <View style={styles.View_6_71}>
        <Text style={styles.Text_6_71}>MVP Creation</Text>
      </View>
      <View style={styles.View_6_72}>
        <Text style={styles.Text_6_72}>Sketching</Text>
      </View>
      <View style={styles.View_6_73}>
        <Text style={styles.Text_6_73}>Wireframing</Text>
      </View>
      <View style={styles.View_6_74}>
        <Text style={styles.Text_6_74}>Product Analytics</Text>
      </View>
      <View style={styles.View_6_75}>
        <Text style={styles.Text_6_75}>Growth Strategies</Text>
      </View>
      <View style={styles.View_6_76}>
        <Text style={styles.Text_6_76}>Product Roadmap</Text>
      </View>
      <View style={styles.View_6_77}>
        <Text style={styles.Text_6_77}>
          Product Backlog &amp; Sprint Backlog
        </Text>
      </View>
      <View style={styles.View_6_78}>
        <Text style={styles.Text_6_78}>
          Product Requirements Document (PRD)
        </Text>
      </View>
      <View style={styles.View_6_79}>
        <Text style={styles.Text_6_79}>Go To Market Strategy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_84}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_87}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_88}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_90}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_91}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/398b/923a/4a6aa6e79f113a34aeeb4a0924ac543a"
        }}
        style={styles.ImageBackground_6_92}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c154/5c84/ed206f6d1f892fbe4bbaacb9dda1b5ca"
        }}
        style={styles.ImageBackground_6_93}
      />
      <View style={styles.View_6_94} />
      <View style={styles.View_6_95}>
        <Text style={styles.Text_6_95}>
          BTECH IN MECHANICAL ENGINEERING FROM SRM UNIVERSITY, CHENNAI 2015-20
        </Text>
      </View>
      <View style={styles.View_6_96}>
        <View style={styles.View_6_97} />
        <View style={styles.View_6_98}>
          <Text style={styles.Text_6_98}>
            CERTIFICATION IN DESIGN FOR QUALITY, MANUFACTURING AND ASSEMBLY FROM
            IIT MADRAS
          </Text>
        </View>
      </View>
      <View style={styles.View_6_99}>
        <View style={styles.View_6_100} />
        <View style={styles.View_6_101}>
          <Text style={styles.Text_6_101}>
            CERTIFICATION IN PRODUCT MANAGEMENT FROM DUKE CE
          </Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_28: {
    width: wp("85.57291666666667%"),
    minWidth: wp("85.57291666666667%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(110, 0, 255, 1)"
  },
  View_6_29: {
    width: wp("11.875%"),
    minWidth: wp("11.875%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.729166666666666%"),
    top: hp("5.191256830601093%")
  },
  Text_6_29: {
    color: "rgba(255, 200, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_30: {
    width: wp("7.447916666666667%"),
    minWidth: wp("7.447916666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.177083333333336%"),
    top: hp("5.8743169398907105%")
  },
  Text_6_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_31: {
    width: wp("5.572916666666667%"),
    minWidth: wp("5.572916666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.22916666666667%"),
    top: hp("6.0109289617486334%")
  },
  Text_6_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_32: {
    width: wp("7.395833333333333%"),
    minWidth: wp("7.395833333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.40625%"),
    top: hp("5.8743169398907105%")
  },
  Text_6_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_33: {
    width: wp("85.57291666666667%"),
    minWidth: wp("85.57291666666667%"),
    height: hp("106.83060109289617%"),
    minHeight: hp("106.83060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.256830601092894%"),
    backgroundColor: "rgba(134, 43, 255, 1)"
  },
  View_6_34: {
    width: wp("85.57291666666667%"),
    minWidth: wp("85.57291666666667%"),
    height: hp("114.34426229508196%"),
    minHeight: hp("114.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.427083333333332%"),
    top: hp("245.62841530054644%"),
    backgroundColor: "rgba(252, 41, 167, 1)"
  },
  View_6_35: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.729166666666666%"),
    top: hp("31.147540983606557%")
  },
  Text_6_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.2,
    textTransform: "none"
  },
  View_6_36: {
    width: wp("13.645833333333332%"),
    minWidth: wp("13.645833333333332%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.25%"),
    top: hp("43.85245901639344%")
  },
  Text_6_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_37: {
    width: wp("8.59375%"),
    minWidth: wp("8.59375%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.291666666666668%"),
    top: hp("78.82513661202186%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_6_38: {
    width: wp("2.272228797276815%"),
    minWidth: wp("2.272228797276815%"),
    height: hp("5.730360583529446%"),
    minHeight: hp("5.730360583529446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.814544677734375%"),
    top: hp("81.62935183999316%")
  },
  ImageBackground_6_39: {
    width: wp("25.703125%"),
    minWidth: wp("25.703125%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%"),
    top: hp("127.86885245901641%")
  },
  ImageBackground_6_47: {
    width: wp("55.338897705078125%"),
    minWidth: wp("55.338897705078125%"),
    height: hp("145.15120709528688%"),
    minHeight: hp("145.15120709528688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: hp("219.26229508196718%")
  },
  ImageBackground_6_55: {
    width: wp("16.614583333333332%"),
    minWidth: wp("16.614583333333332%"),
    height: hp("41.53005464480874%"),
    minHeight: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.35416666666667%"),
    top: hp("32.78688524590164%")
  },
  ImageBackground_6_59: {
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
  View_6_63: {
    width: wp("15.416666666666668%"),
    minWidth: wp("15.416666666666668%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%"),
    top: hp("129.78142076502732%")
  },
  Text_6_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.800000000000001,
    textTransform: "none"
  },
  View_6_64: {
    width: wp("23.489583333333332%"),
    minWidth: wp("23.489583333333332%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.78125%"),
    top: hp("250.95628415300547%")
  },
  Text_6_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.800000000000001,
    textTransform: "none"
  },
  View_6_65: {
    width: wp("16.145833333333336%"),
    minWidth: wp("16.145833333333336%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("134.69945355191257%")
  },
  Text_6_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_66: {
    width: wp("23.177083333333336%"),
    minWidth: wp("23.177083333333336%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.041666666666668%"),
    top: hp("254.50819672131146%")
  },
  Text_6_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_67: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("151.9125683060109%")
  },
  Text_6_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_68: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("157.92349726775956%")
  },
  Text_6_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_69: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("163.9344262295082%")
  },
  Text_6_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_70: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("169.94535519125685%")
  },
  Text_6_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_71: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("175.95628415300547%")
  },
  Text_6_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_72: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("181.9672131147541%")
  },
  Text_6_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_73: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("187.97814207650273%")
  },
  Text_6_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_74: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("193.98907103825135%")
  },
  Text_6_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_75: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("200%")
  },
  Text_6_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_76: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("206.01092896174862%")
  },
  Text_6_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_77: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("212.0218579234973%")
  },
  Text_6_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_78: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("218.0327868852459%")
  },
  Text_6_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_79: {
    width: wp("30.520833333333336%"),
    minWidth: wp("30.520833333333336%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.541666666666668%"),
    top: hp("224.04371584699453%")
  },
  Text_6_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_80: {
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
  ImageBackground_6_81: {
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
  ImageBackground_6_82: {
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
  ImageBackground_6_83: {
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
  ImageBackground_6_84: {
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
  ImageBackground_6_85: {
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
  ImageBackground_6_86: {
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
  ImageBackground_6_87: {
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
  ImageBackground_6_88: {
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
  ImageBackground_6_89: {
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
  ImageBackground_6_90: {
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
  ImageBackground_6_91: {
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
  ImageBackground_6_92: {
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
  ImageBackground_6_93: {
    width: wp("18.75%"),
    height: hp("110.27483497161032%"),
    top: hp("127.5783517973019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.21875%")
  },
  View_6_94: {
    width: wp("18.020833333333332%"),
    minWidth: wp("18.020833333333332%"),
    height: hp("59.2896174863388%"),
    minHeight: hp("59.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.520833333333334%"),
    top: hp("272.26775956284155%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  View_6_95: {
    width: wp("12.239583333333332%"),
    minWidth: wp("12.239583333333332%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("276.09289617486337%")
  },
  Text_6_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_96: {
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
  View_6_97: {
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
  View_6_98: {
    width: wp("15.885416666666666%"),
    minWidth: wp("15.885416666666666%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7291666666666643%"),
    top: hp("2.8688524590163524%")
  },
  Text_6_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_99: {
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
  View_6_100: {
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
  View_6_101: {
    width: wp("15.885416666666666%"),
    minWidth: wp("15.885416666666666%"),
    minHeight: hp("53.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8854166666666572%"),
    top: hp("2.8688524590163524%")
  },
  Text_6_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 2635 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
