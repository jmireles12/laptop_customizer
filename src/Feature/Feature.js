import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureName from '../FeatureName/FeatureName';
import FeatureItem from '../FeatureItem/FeatureItem';

class Feature extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        <FeatureItem
                            updateFeature={this.props.updateFeature}
                            usCurrency={this.props.usCurrency}
                            item={item}
                            selected={this.props.selected}
                            feature={feature}
                            features={features}
                            featureHash={featureHash}
                            options={options}
                            itemHash={itemHash}
                        />
                        
                    </div>
                );
            });
            return (
                <FeatureName key={idx} featureHash={featureHash} feature={feature} options={options}/>
            )
        })
        return (
            <div className='featureList'>{features}</div>
        )
    }
}

export default Feature;