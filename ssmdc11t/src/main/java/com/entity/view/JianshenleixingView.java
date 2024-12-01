package com.entity.view;

import com.entity.JianshenleixingEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 健身类型
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-02-25 11:11:15
 */
@TableName("jianshenleixing")
public class JianshenleixingView  extends JianshenleixingEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public JianshenleixingView(){
	}
 
 	public JianshenleixingView(JianshenleixingEntity jianshenleixingEntity){
 	try {
			BeanUtils.copyProperties(this, jianshenleixingEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}